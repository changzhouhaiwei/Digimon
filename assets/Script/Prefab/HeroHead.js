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
        headFrame:{
            default:[],
            type:cc.SpriteFrame,
        }
    },

    // use this for initialization
    onLoad: function () {
        this.refreshCardInfo();
    },

    refreshCardInfo:function (){
        // 从assets中读取
        var sp = this.getComponent(cc.Sprite);
        sp.spriteFrame = this.headFrame[2];

        //动态读取
        var self = this;
        cc.loader.loadRes("5_card.png", cc.SpriteFrame, function (err, spriteFrame) {
            sp.spriteFrame = spriteFrame;
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
