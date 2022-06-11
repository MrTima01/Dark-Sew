FROM ravindu01manoj/sewqueen:fullcontrol

RUN git clone https://github.com/MrTima01/Dark-Sew /root/Dark-Sew
WORKDIR /root/Dark-Sew/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "darksew.js"]
