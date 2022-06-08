FROM ravindu01manoj/sewqueen:fullcontrol

RUN git clone https://github.com/MrTima01/Realise-Bot /root/Realise-Bot
WORKDIR /root/Realise-Bot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "darkmax.js"]
