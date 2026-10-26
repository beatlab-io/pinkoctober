// Prefer the browser's primary language. An explicit URL can share either version.
function resolveLanguage(languages, fallbackLanguage, search=''){
  const requested=new URLSearchParams(search).get('lang');
  if(requested==='en'||requested==='es')return requested;
  const preferred=languages?.[0]||fallbackLanguage||'es';
  return /^en(?:[-_]|$)/i.test(preferred)?'en':'es';
}
const language=resolveLanguage(navigator.languages,navigator.language,location.search);
document.documentElement.lang=language;
function t(value){
  if(language!=='en'||typeof value!=='string')return value;
  const key=value.trim();
  const translated=englishTranslations[key];
  if(translated===undefined)return value;
  return value.slice(0,value.indexOf(key))+translated+value.slice(value.indexOf(key)+key.length);
}
function localize(root){
  if(language!=='en')return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
  let node=walker.currentNode;
  do{
    if(node.nodeType===Node.TEXT_NODE){
      if(!node.parentElement?.closest('script,style'))node.nodeValue=t(node.nodeValue);
    }else if(node.nodeType===Node.ELEMENT_NODE){
      for(const attr of ['aria-label','title','alt']){
        if(node.hasAttribute(attr))node.setAttribute(attr,t(node.getAttribute(attr)));
      }
    }
  }while((node=walker.nextNode()));
}
