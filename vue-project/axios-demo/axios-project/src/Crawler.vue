<script>
import cheerio from 'cheerio'
import xmldom from 'xmldom'
const dom = xmldom.DOMParser()

var headers= {
	'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	'accept-language': "en-US,en;q=0.9",
  
}
export default {
name:"App",
  data(){
    return {news:[]}
  },
  methods:{
    CrawlSpider(){
        this.$axios.get("/c/finance"
           ,{headers:headers}
      ).then(
      res=>{
console.log('click');
      //this.news = res.data;
    const $ = cheerio.load(res.data)
  //  var doc = new dom().parseFromString(res.data)
          //console.log($)
//var doc = dom.parseFromString(xml)
//var title = xpath.select("//title/text()", doc).toString()
//console.log(title)
          //let  title = $('div#node-2424')
          //let  title = $('title').text()
          let  titles = $('#node-2424 > div > div.cc-cd-cb > div.cc-cd-cb-l > a')

        //console.log(titles);
        //console.log(titles.length);
        if (titles.length==1){
        //console.log(titles.text())
        }
        let news =[]
        for(let i =0;i<titles.length;i++){
        let txt = $(titles[i]).text()
        let txt_tmp = txt.trim()
        let txt_tmp2 =     txt_tmp.slice(2)
            let txt_ = txt_tmp2.trim()
            console.log(txt_)
            news.push(txt_)
            //console.log(typeof(txt))
        }
        this.news = news
    //let  node = $('//div[@id="node-2424"]')
console.log('end');
    

      },(err)=>{console.log('error');console.log(err)});
    }
  }
}
</script>

<template>
  <div>
  
  <button @click="CrawlSpider">Crawle</button>
  </div>
  <div>
      <h2>News </h2>
      <ul>
          <li v-for="item in news">{{item}}</li>
      </ul>
  </div>  
</template>

<style lange="less">
#app{
background-color:yellow;
text-align:center;
color:#2c350;
margin-top:60px;
}
</style>
