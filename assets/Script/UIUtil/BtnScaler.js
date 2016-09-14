cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        self.button = this.getComponent(cc.Button);
        function onTouchDown(event){
            this.setScale(1.2);
        };

        function onTouchCancel(){
            this.setScale(1);
        };

        function onTouchEnd(){
            this.setScale(1);
        };

        this.node.on('touchstart', onTouchDown, this.node);
        // this.node.on("touchstart",onTouchStart,this.node);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,onTouchCancel,this.node);
        this.node.on(cc.Node.EventType.TOUCH_END,onTouchEnd,this.node);

        this.node.on("hello",function(){
            cc.log("hello,BtnScaler");
        });
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
