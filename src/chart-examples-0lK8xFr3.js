import{k as n,h as p,i as l,t as o}from"./index-DCmr_WFc.js";import{V as f}from"./view.mixin-CoPSu9yW.js";var u=Object.getOwnPropertyDescriptor,b=(a,s,c,i)=>{for(var e=i>1?void 0:i?u(s,c):s,r=a.length-1,h;r>=0;r--)(h=a[r])&&(e=h(e)||e);return e};let t=class extends f(p){constructor(){super(...arguments),this.featureIsEnabled=!1,this.isMfe=!1}render(){return this.renderMfe(n` isMfe = ${this.isMfe}
        <h2>Basic Bar chart</h2>
        <base-chart chart-type="bar"></base-chart>
        <h2>Pie and Doughnut</h2>
        <div class="pie-container">
          <base-chart chart-type="pie"></base-chart>
          <base-chart chart-type="doughnut"></base-chart>
        </div>`)}};t.styles=[l`
      .pie-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    `];t=b([o("chart-examples")],t);export{t as ChartExamples};
