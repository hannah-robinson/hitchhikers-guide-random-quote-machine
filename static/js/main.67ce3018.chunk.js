(this["webpackJsonphitchhikers-guide-random-quote-machine"]=this["webpackJsonphitchhikers-guide-random-quote-machine"]||[]).push([[0],[,,,function(t,e,o){t.exports={Quote:"Quote_Quote__12phq",Text:"Quote_Text__2hrrl",Author:"Quote_Author__3o8ZQ",Punctuation:"Quote_Punctuation__Em4hD"}},function(t,e,o){t.exports={Buttons:"Buttons_Buttons__2ykWm",ShareButtons:"Buttons_ShareButtons__3i4q4"}},,,function(t,e,o){t.exports={sig:"App_sig__48ddM"}},,,function(t,e,o){t.exports={Card:"QuoteGenerator_Card__3lS8p"}},,,,,,,function(t,e,o){},,function(t,e,o){"use strict";o.r(e);var a=o(1),i=o.n(a),h=o(6),s=o.n(h),n=(o(17),o(7)),u=o.n(n),r=o(8),d=o(9),c=o(2),l=o(12),b=o(11),m=o(10),y=o.n(m),k=o(3),g=o.n(k),x=o(0),p=function(t){return Object(x.jsxs)("div",{className:g.a.Quote,children:[Object(x.jsxs)("div",{id:"text",className:g.a.Text,children:[Object(x.jsx)("span",{className:g.a.Punctuation,children:Object(x.jsx)("i",{class:"fas fa-quote-left"})})," ",t.quote]}),Object(x.jsx)("div",{id:"author",className:g.a.Author,children:t.author})]})},f=o(4),j=o.n(f),w=function(t){var e="https://twitter.com/intent/tweet?text=\u275d "+t.quote+" \u275e \u2013 "+t.author;return Object(x.jsxs)("div",{className:j.a.Buttons,children:[Object(x.jsxs)("div",{className:j.a.ShareButtons,children:[Object(x.jsx)("a",{href:e,title:"Tweet this!",id:"tweet-quote",children:Object(x.jsx)("button",{className:j.a.Icon,children:Object(x.jsx)("i",{class:"fab fa-twitter"})})}),Object(x.jsx)("button",{title:"Copy this!",id:"copy",onClick:t.copy,children:Object(x.jsx)("i",{class:"fas fa-copy"})})]}),Object(x.jsx)("button",{id:"new-quote",onClick:t.update,children:"New Quote"})]})},G=[{quote:"Time is an illusion. Lunchtime doubly so.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"I'd far rather be happy than right any day.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"The ships hung in the sky in much the same way that bricks don't.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Would it save you a lot of time if I just gave up and went mad now?",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Time is an illusion. Lunchtime doubly so.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"If there's anything more important than my ego around, I want it caught and shot now.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"For a moment, nothing happened. Then, after a second or so, nothing continued to happen.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:'"This must be Thursday," said Arthur to himself, sinking low over his beer. "I never could get the hang of Thursdays."',author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Ford... you're turning into a penguin. Stop it.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:'"The Answer to the Great Question... Of Life, the Universe and Everything... Is... Forty-two," said Deep Thought, with infinite majesty and calm.',author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"So long, and thanks for all the fish.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Anyone who is capable of getting themselves made President should on no account be allowed to do the job.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"One of the things Ford Prefect had always found hardest to understand about humans was their habit of continually stating and repeating the very very obvious.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"We demand rigidly defined areas of doubt and uncertainty!",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Did I do anything wrong today or has the world always been like this and I've been too wrapped up in myself to notice?",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Ford! There's an infinite number of monkeys outside who want to talk to us about this script for Hamlet they've worked out.",author:"Douglas Adams",book:"The Hitchhiker's Guide to the Galaxy"},{quote:"Hitchhiker's Guide is a book of philosophy.",author:"Elon Musk",book:"The Hitchhiker's Guide to the Galaxy",source:"In an interview with Jack Ma (\u9a6c\u4e91)"}],q=function(t){Object(l.a)(o,t);var e=Object(b.a)(o);function o(t){var a;return Object(r.a)(this,o),(a=e.call(this,t)).state={randomIndex:Math.floor(Math.random()*G.length)},a.quoteUpdateHandler=a.quoteUpdateHandler.bind(Object(c.a)(a)),a.copyToClipboardHandler=a.copyToClipboardHandler.bind(Object(c.a)(a)),a}return Object(d.a)(o,[{key:"quoteUpdateHandler",value:function(){this.setState({randomIndex:Math.floor(Math.random()*G.length)})}},{key:"copyToClipboardHandler",value:function(){navigator.clipboard.writeText(G[this.state.randomIndex].quote+" \u2013 "+G[this.state.randomIndex].author)}},{key:"render",value:function(){return Object(x.jsxs)("main",{className:y.a.Card,id:"quote-box",children:[Object(x.jsx)(p,{quote:G[this.state.randomIndex].quote,author:G[this.state.randomIndex].author}),Object(x.jsx)(w,{update:this.quoteUpdateHandler,copy:this.copyToClipboardHandler,quote:G[this.state.randomIndex].quote,author:G[this.state.randomIndex].author})]})}}]),o}(a.Component),T=function(t){return t.children};var H=function(){return Object(x.jsxs)(T,{children:[Object(x.jsx)(q,{}),Object(x.jsx)("div",{className:u.a.sig,children:Object(x.jsxs)("a",{href:"https://twitter.com/HannahRobinson",children:[Object(x.jsx)("i",{class:"fab fa-twitter"}),"  @HannahRobinson"]})})]})};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.67ce3018.chunk.js.map