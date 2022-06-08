           case 'cmd': case 'menu': case 'help': case '?': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            hydratedFooterText: `Hi 🤚 ${pushname}
❏「 DARK MAX 」
𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
*DEVELOPER : MR.TIMA*
*NEW SPEED VERSION..SELECT YOUR COMMAND LIST*

THIS *IS DARK MAX COMMAND PANEL*

RATINGS coming soon..
`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'MR.TIMA',
                                    url: 'wa.me/94715264791'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'GITHUB',
                                    url: 'github.com/'
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
                                    displayText: 'ABOUT DARK MAX BOT',
                                    id: `${prefix}about`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Darkmax.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
