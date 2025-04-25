import{x as n,i as p,a as l,t as o}from"./index-Df2SaUFZ.js";import{V as f}from"./view.mixin-J4vIlTpz.js";var u=Object.getOwnPropertyDescriptor,b=(r,s,h,c)=>{for(var e=c>1?void 0:c?u(s,h):s,t=r.length-1,i;t>=0;t--)(i=r[t])&&(e=i(e)||e);return e};let a=class extends f(p){constructor(){super(...arguments),this.featureIsEnabled=!1,this.isMfe=!1}render(){return this.renderMfe(n` isMfe = ${this.isMfe}
        <h2>Basic Bar chart</h2>
        <base-chart chart-type="bar"></base-chart>
        <base-chart chart-type="scatter"></base-chart>
        <h2>Pie and Doughnut</h2>
        <div class="pie-container">
          <base-chart chart-type="pie"></base-chart>
          <base-chart chart-type="doughnut"></base-chart>
        </div>`)}};a.styles=[l`
      .pie-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    `];a=b([o("chart-examples")],a);export{a as ChartExamples};
