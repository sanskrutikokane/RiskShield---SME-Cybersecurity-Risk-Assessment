const threats = [
  {name:"Phishing & social engineering", sub:"Email / credential theft", l:4, i:4},
  {name:"Ransomware", sub:"Data encryption / disruption", l:3, i:5},
  {name:"Insider threat", sub:"Accidental or malicious misuse", l:2, i:4},
  {name:"Unpatched systems", sub:"Known vulnerabilities", l:4, i:4},
  {name:"Weak authentication", sub:"Password / account takeover", l:4, i:4},
  {name:"Third-party exposure", sub:"Vendor / supply-chain access", l:3, i:4}
];

const rows = document.getElementById("riskRows");
const overallScore = document.getElementById("overallScore");
const overallStatus = document.getElementById("overallStatus");
const counts = {
  Critical: document.getElementById("criticalCount"),
  High: document.getElementById("highCount"),
  Medium: document.getElementById("mediumCount"),
  Low: document.getElementById("lowCount")
};

function level(score){
  if(score >= 17) return "Critical";
  if(score >= 10) return "High";
  if(score >= 5) return "Medium";
  return "Low";
}
function options(selected){
  return Array.from({length:5},(_,i)=>{
    const n=i+1;
    return `<option value="${n}" ${n===selected?"selected":""}>${n}</option>`;
  }).join("");
}
function render(){
  rows.innerHTML = threats.map((t,idx)=>`
    <div class="risk-row">
      <div><span class="risk-name">${t.name}</span><span class="risk-sub">${t.sub}</span></div>
      <select class="select" data-type="l" data-index="${idx}" aria-label="Likelihood">${options(t.l)}</select>
      <select class="select" data-type="i" data-index="${idx}" aria-label="Impact">${options(t.i)}</select>
      <div class="risk-score" id="score-${idx}">${t.l*t.i}</div>
    </div>`).join("");
  update();
  document.querySelectorAll(".select").forEach(s=>s.addEventListener("change",e=>{
    const idx=+e.target.dataset.index;
    threats[idx][e.target.dataset.type]=+e.target.value;
    document.getElementById(`score-${idx}`).textContent=threats[idx].l*threats[idx].i;
    update();
  }));
}
function update(){
  const scores=threats.map(t=>t.l*t.i);
  const avg=scores.reduce((a,b)=>a+b,0)/scores.length;
  const overall=Math.round(avg*10)/10;
  overallScore.textContent=overall+"/25";
  Object.keys(counts).forEach(k=>counts[k].textContent=scores.filter(s=>level(s)===k).length);
  const status=level(overall);
  overallStatus.textContent=status+" overall risk";
}
document.getElementById("resetBtn").addEventListener("click",()=>{
  threats.forEach((t,i)=>Object.assign(t,{l:[4,3,2,4,4,3][i],i:[4,5,4,4,4,4][i]}));
  render();
});
render();

document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.querySelector("nav");
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  if(nav.style.display==="flex"){
    nav.style.position="absolute";nav.style.top="72px";nav.style.left="0";nav.style.right="0";
    nav.style.padding="20px 5vw";nav.style.background="#080a0b";nav.style.flexDirection="column";
  }
});
