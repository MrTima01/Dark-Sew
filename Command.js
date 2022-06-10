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
                    description: `*THIS IS DARK SEW COMMAND PANEL*\n\n`,
                    buttonText: "SELECT",
                    footerText: "SELECT YOUR COMMAND LIST",
                    listType: "SINGLE_SELECT",
                    sections:
                                                             {
							   [
									{
										"title": "MAIN COMMAND LIST",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}maincmd`
									},
									{
										"title": "DOWNLOAD COMMAND LIST",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadcmd`
									},
									{
										"title": "VOICE CHANGER COMMAND LIST",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}voicecmd`
									},
										{
											"title": "CONVERT COMMAND LIST",
										"description": "Displays The List Of Image Features",
										"rowId": `${prefix}convertcnd`
										},
										{
											"title": "ADMIN ONLY COMMAND LIST",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
								       }
								]
							},
          listType: 1
                }
            }), {})
            DarksewInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
