JP.MainCenter.ediTreeForm.tabs = Ext.extend(Ext.TabPanel, {
    activeTab: 0,
    resizeTabs: true,
    border: false,
    //id: 'JPeditTabs',
    initComponent: function() {
	this.items = [
	{
	    xtype: 'jp_main_center_ediTreeForm_tabs_edit'
	}
	];

	JP.MainCenter.ediTreeForm.tabs.superclass.initComponent.call(this);
    }
});

Ext.reg('jp_main_center_ediTreeForm_tabs', JP.MainCenter.ediTreeForm.tabs);