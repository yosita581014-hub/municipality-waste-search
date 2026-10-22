import re,pathlib,hashlib,json
p=pathlib.Path('index.html'); source=p.read_text(); manifest=[]
def split(m):
 tag,attrs,body=m.group(1),m.group(2),m.group(3)
 if tag=='script' and re.search(r'\bsrc=',attrs): return m.group(0)
 ext='js' if tag=='script' else 'css'
 ident=re.search(r'\bid=[\"\']([^\"\']+)',attrs)
 name=ident.group(1) if ident else f'{tag}-{len(manifest):02d}'
 path=f'assets/{name}.{ext}'
 pathlib.Path(path).write_text(body)
 manifest.append({'path':path,'sha256':hashlib.sha256(body.encode()).hexdigest()})
 return f'<script{attrs} src="{path}"></script>' if tag=='script' else f'<link rel="stylesheet" href="{path}">'
result=re.sub(r'<(script|style)([^>]*)>(.*?)</\1>',split,source,flags=re.S)
p.write_text(result)
pathlib.Path('assets/manifest.json').write_text(json.dumps(manifest,indent=2))
print('HTML bytes:',len(source.encode()),'->',len(result.encode()),'assets:',len(manifest))
