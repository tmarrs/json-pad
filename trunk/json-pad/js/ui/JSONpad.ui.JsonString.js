var JSONpadUi_JsonString = {
	xtype: 'form',
	title: '',
	layout: 'fit',
	region: 'north',
	height: 300,
	split: true,
	ref: 'jsonString',
	id: 'JsonStringForm',
	tbar: {
		xtype: 'container',
		layout: 'anchor',
		cls: 'parentToolbar',
		items    : [
		{
			xtype: 'toolbar',
			id: 'JsonStringForm_tbar',
			ref: '../tbar_menu',
			items: [
			{
				text: 'File',
				id: 'JsonStringForm_tbar_file',
				menu: {
					id: 'menu_file',
					items: [
					{
						text: 'New',
						id: 'btn_menu_file_new'
					},
					{
						text: 'Quit',
						id: 'btn_menu_file_quit'
					}
					]
				}
			},
			{
				text: 'Edit',
				id: 'JsonStringForm_tbar_edit',
				menu: {
					id: 'menu_edit',
					items: [
					{
						text: 'Copy JSON string',
						id: 'btn_menu_file_copyJson'
					},
					{
						text: 'Paste JSON string',
						id: 'btn_menu_file_pasteJson'
					}
					]
				}
			},
			{
				text: 'Help',
				id: 'JsonStringForm_tbar_help',
				menu: {
					id: 'menu_help',
					items: [
					{
						text: 'About...',
						id: 'btn_menu_help_about'
					},'-',{
						text: 'Check for updates',
						id: 'btn_menu_help_checkUpdate'
					}
					]
				}
			}
			]
		},{
			xtype: 'toolbar',
			id: 'JsonStringForm_ibar',
			ref: '../tbar_icons',
			items: [
			{
				iconCls: 'icon_loadToTree',
				id: 'btn_menu_ico_loadToTree',
				scale: 'large',
				tooltip: 'Load JSON string into tree view',
				ref: 'btn_loadToTree'
			},{
				iconCls: 'icon_loadFromTree',
				id: 'btn_menu_ico_loadFromTree',
				scale: 'large',
				tooltip: 'Get JSON String from tree data',
				ref: 'btn_loadFromTree'
			},
			'-',
			{
				iconCls: 'icon_copyJson',
				id: 'btn_menu_ico_copyJson',
				scale: 'large',
				tooltip: 'Copy JSON string into the clipboard',
				ref: 'btn_copyJson'
			},{
				iconCls: 'icon_pasteJson',
				id: 'btn_menu_ico_pasteJson',
				scale: 'large',
				tooltip: 'Paste JSON string from the clipboard',
				ref: 'btn_pasteJson'
			},{
				//iconCls: 'icon_pasteJson',
				text: "Compress",
				id: 'btn_menu_ico_compressJson',
				scale: 'large',
				tooltip: 'Delete all spaces and new lines in the JSON string',
				ref: 'btn_compressJson'
			},
			'-',
			{
				text: 'Examples',
				id: 'JsonStringForm_ibar_samples',
				scale: 'large',
				tooltip: 'Insert a JSON example',
				menu: {
					id: 'menu_samples',
					items: [{
						text: 'Example 1',
						id: 'JsonStringForm_ibar_samples_1',
						example: '{\n\t"Key": "value"\n}'
					},{
						text: 'Example 2',
						id: 'JsonStringForm_ibar_samples_2',
						example: '{\n\t"Kreditkarte": "Xema",\n\t"Nummer": "1234-5678-9012-3456",\n\t"Inhaber": {\n\t\t"Name": "Reich",\n\t\t"Vorname": "Rainer",\n\t\t"Geschlecht": "männlich",\n\t\t"Vorlieben": [ "Reiten", "Schwimmen", "Lesen" ],\n\t\t"Alter": null\n\t},\n\t"Deckung": 2e+6,\n\t"Währung": "EURO"\n}'
					},{
						text: 'Example 3',
						id: 'JsonStringForm_ibar_samples_3',
						example: '{\n\t"MyObject": {\n\t\t"MyKey": "with value"\n\t},\n\t"MyArray": ["Value1", "Value2"]\n}'
					}]
				}
			}
			]
		}
		]
	},
	items: [
	{
		xtype: 'textarea',
		anchor: '100% 100%',
		hideLabel: true,
		name: 'jsonString',
		id: 'JsonStringForm_jsonString',
		ref: 'stringInput'
	}
	]
};