import{j as n}from"./jsx-runtime.D5qyYPMi.js";import{R as c}from"./index.CZlPm10g.js";import{u as p}from"./usesearch.kOdKaCLw.js";import"./router.BP6AILYM.js";function i(e,o){let t;return function(...u){clearTimeout(t),t=setTimeout(()=>{e.apply(this,u)},o)}}function y(){const e=p(),o=c.useCallback(i(r=>{e.setQuery(r)},500),[]);c.useEffect(()=>{a(e.query)},[]);const[t,a]=c.useState(""),u=r=>{const s=r.target.value;a(s),o(s)};return n.jsx("input",{type:"text","aria-label":"search",className:"px2 py1",placeholder:"🔍 Search Icons",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:t,onChange:u})}export{y as SearchInput};
