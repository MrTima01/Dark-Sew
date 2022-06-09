/*
CODE OWNERS #Mr.Tima, XeonDT, Ravindu Manoj

*/


 case 'sew': case 'SEW': case 'cmd': case '.': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('')},
                            hydratedFooterText: `HELLO ${pushname}
❏「 *DARK SEW MENU* 」
𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(2)} miliseconds
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botnma}
𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownernma}
𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
*DARK SEW MENU*

SELECT YOUR BUTTON BELLOW
`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '#RAVINU MANOJ',
                                    url: 'wa.me/94'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Github',
                                    url: 'https://github.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'RATE US',
                                    id: `${prefix}rate`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'COMMANDS',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'DARK SEW',
                                    id: `${prefix}dscmd`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                darksew.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
