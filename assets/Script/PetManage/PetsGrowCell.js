cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        cc.log("不断的深入");
        function onTouchDown(event){
            cc.log("你好啊，如何深入学习js呢");
        }

        function onTouchEnd(event){

        }

        this.node.on("touchstart",onTouchDown,this.node);
        this.node.on("touchend",onTouchEnd,this.node);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
