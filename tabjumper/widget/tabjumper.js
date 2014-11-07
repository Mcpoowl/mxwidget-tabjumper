/*
* Created by Matthijs Dekker (Trivento)
* February 2014
*
* V1.0
*/

dojo.provide("tabjumper.widget.tabjumper");

mendix.widget.declare('tabjumper.widget.tabjumper', {
    inputargs: {
        // styling
        btnTitle : '',
        showAsButton : '',
        btnIcon : '',
        // behaviour
        tabclass : '',
        jumpTo: '',
        tabName : '',
        tabNumber: 0
    },

    parent : null,
    btn : null,

    postCreate : function() {
        this.buildJumper();
        this.actRendered();
    },

    buildJumper : function () {
        this.btn = new mendix.widget._Button({
            caption		: this.btnTitle,
            iconUrl		: this.btnIcon,
            onClick		: dojo.hitch(this, this.performTabJump),
            type		: this.showAsButton,
            cssclass	: ""
        });
        this.domNode.appendChild(this.btn.domNode);
    },

    getNewActiveTab : function () {
        var tabWidgetCssSelected = dojo.query("."+this.tabclass)[0];
        this.parent = dijit.byNode(tabWidgetCssSelected);
        var tabList = this.parent.getChildren();
        if (this.jumpTo === 'First') {
            return tabList[0];
        }
        if (this.jumpTo === 'Last') {
            return tabList[tabList.length-1];
        }              
        if (this.jumpTo === 'Numbered') {
            return tabList[this.tabNumber -1];
        }        
        for(var i=0; tabList.length; i++) {
            if (this.jumpTo === 'Titled' && tabList[i].title == this.tabName) {
            	return tabList[i];
        	}  
            if (tabList[i].button.className == "active") {
                if (this.jumpTo === 'Next') {
                    return tabList[i+1];
                }
                if (this.jumpTo === 'Previous') {
                    return tabList[i-1];
                }            
            }
        }
        return null;
    },

    performTabJump : function () {
        var tab = this.getNewActiveTab();
        if (tab) {
            this.parent.show(tab);
        }
    },

    uninitialize : function(){
    }
});
