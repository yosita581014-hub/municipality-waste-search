"""Run after editing assets; only index.html references change."""
import pathlib,re,hashlib
p=pathlib.Path('index.html')
def version(m):
 path=m[2].split('?')[0]
 digest=hashlib.sha256(pathlib.Path(path).read_bytes()).hexdigest()[:12]
 return m[1]+path+'?v='+digest+m[3]
p.write_text(re.sub(r'((?:src|href)=")((?:assets/)[^"]+)(")',version,p.read_text()))
print('Asset content versions updated')
