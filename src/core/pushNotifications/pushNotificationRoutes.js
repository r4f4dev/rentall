var FCM = require('fcm-node');
import fetch from 'node-fetch'
import { UserLogin, Currencies } from '../../data/models';
import { getConfigurationData } from '../email/helpers/getUserEmail';

const pushNotificationRoutes = app => {

    app.post('/push-notification', async function (req, res) {
        const configData = await getConfigurationData({ name: ['pushNotificationKey'] });
        var fcm = new FCM(configData.pushNotificationKey);
        let notifyContent = {
            "screenType": "message",
            "title": "New Message",
            "userType": "guest",
            "notificationId": 40300,
            "message": "John: dfsgsfdqwertyuiiiio",
            "threadId": "12",
            "guestId": "2",
            "guestName": "john",
            "guestPicture": "kmik",
            "hostId": "123",
            "hostName": "nj j ",
            "hostPicture": "nmim",
            "guestProfileId": "123",
            "hostProfileId": "123",
            // "content_available": true
        };

        let userId = req.body.userId;
        let content = req.body.content;

        let notificationId = Math.floor(100000 + Math.random() * 900000);
        let deviceId = [];
        content['notificationId'] = notificationId;
        content['content_available'] = true;

        const getdeviceIds = await UserLogin.findAll({
            attributes: ['deviceId', 'deviceType'],
            where: {
                userId: userId
            },
            raw: true
        });

        if (getdeviceIds && getdeviceIds.length > 0) {
            getdeviceIds.map(async (item) => {
                deviceId.push(item.deviceId);
            })
        };

        var message = {
            registration_ids: deviceId,
            notification: {
                title: content.title,
                body: content.message,
                content_available: true
            },

            data: {
                content: content,
            }
        };

        fcm.send(message, function (err, response) {
            if (err) {
                console.log("Something has gone wrong!", err);
            } else {
                console.log("Successfully sent with response: ", response);
            }
            res.send({ status: response, errorMessge: err });
        });

    });

    app.post('/updateCoinbase', async function (req, res) {
        const URL = 'https://api.coinbase.com/v2/currencies';
        const resp = await fetch(URL);
        const { data } = await resp.json();
        let newCurrencyList = data && data.length > 0 && data.map(function (currency) {
            return { "symbol": currency.id };
        });
        let existingCurrencyList = await Currencies.findAll({
            attributes: ['id', 'symbol'],
            raw: true
        });
        let filterId = new Set(existingCurrencyList.map(({ symbol }) => symbol));
        let filteredCurrencyList = newCurrencyList.filter(({ symbol }) => !filterId.has(symbol));
        await Currencies.bulkCreate(filteredCurrencyList);
        res.send({ status: 200 });
    });

};

export default pushNotificationRoutes;