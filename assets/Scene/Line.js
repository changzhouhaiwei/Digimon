cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        if (cc.director.setClearColor) {
            cc.director.setClearColor( cc.hexToColor('#ffffff') );
        }

        this.ctx = this.getComponent(cc.Graphics);
        cc.log("fuck",this.ctx);
        this.pointArr = new Array();
        this.xxx = 1;

        var self = this;
        var listener = {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touches, event) {
                // cc.log('Touch Began: ' + event);
                var pt = touches.getLocation();
                // pt = this.conv
                self.prePt = pt;
                // cc.log("hahahah",self.xxx);
                self.ctx.moveTo(pt.x,pt.y);
                self.pointArr.push(pt);
                return true; //这里必须要写 return true
            },
            
            onTouchMoved: function (touches, event) {
                // cc.log('Touch Moved: ' + event);
                var pt = touches.getLocation();
                

            },
            onTouchEnded: function (touches, event) {
            // cc.log('Touch Ended: ' + event);
            },
            onTouchCancelled: function (touches, event) {
            // cc.log('Touch Cancelled: ' + event);
            }
        }
        // 绑定单点触摸事件
        cc.eventManager.addListener(listener, this.node);

        // this.node.on("");
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
