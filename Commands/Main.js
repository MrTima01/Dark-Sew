/*

COPIRIGHT BY MR.TIMA
REPO OWNER RAVINDU MANOJ
*CODED BY XEONDT, MR.TIMA...
CODE OWNERS *XEONDT, MR.TIMA, RAVINU MANOJ
*/

case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `HELLO ${pushname}`,
                    description: `*THIS IS DARK MAX COMMAND LIST*\n\n`,
                    buttonText: "SELECT",
                    footerText: "*SELECT YOUR COMMAND LIST*",
                    listType: "SINGLE_SELECT",
                    sections: [{
									{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}all`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "Image Menu",
										"description": "Displays The List Of Image Features",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Miscellaneous Menu",
										"description": "Displays The List Of Miscellaneous Features",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										
								
