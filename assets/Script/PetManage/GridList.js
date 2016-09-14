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
        heroHead:{
            default:null,
            type:cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        var ConnectDlg = require("../NetWork/ConnectDlg")
        var dlg = new ConnectDlg();
        dlg.onLoad();

        var ComCfg = require("../Util/ComCfg")
        cc.log("com cfg///",ComCfg.version,ComCfg.getTest());
        ComCfg.version = 1.3;

        for(let i=1;i<6;i++){
            var head = cc.instantiate(this.heroHead)
            this.node.addChild(head)
        }

        // var ComCfg = require("../Util/ComCfg")
        // cc.log("on loaddd//",ComCfg.version,ComCfg.getTest());                
    },



    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
