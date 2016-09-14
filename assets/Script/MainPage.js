cc.Class({
    extends: cc.Component,

    properties: {
        petsList:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // this.node.on("hello",function(){
        //     cc.log("hello,everyone");
        // });
    },

    gotoPetList:function (){
        this.petsList.active = true;
        this.testNotification();
    },
    
    testNotification:function(){
        cc.log("what's the fuck");
        // this.node.dispatchEvent("hello");
        // 节点 c 的组件脚本中
        // this.node.dispatchEvent( new cc.Event.EventCustom('hello', true) );

    },
    // fuck:function(){
    //   cc.log("fuck what")  
    // },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
