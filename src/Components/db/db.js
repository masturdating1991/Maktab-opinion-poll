import { v4 as uuidv4 } from 'uuid';

let InitialData = {
    organization_name: "Snapp",
    organization_name_fa: "اسنپ",
    logo_url: "https://snapp.ir/assets/images/logo/logo.png",
    background_url: "https://images.unsplash.com/photo-1490143921278-d853145e4977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1449&q=80",
    questions: [
        {
            id: uuidv4(),
            text: "آیا از خدمات اسنپ راضی هستید؟",
            options: [
                { key: 1, text: "اصلا" },
                { key: 2, text: "بد نیست" },
                { key: 3, text: "خوبه" },
            ]
        },
        {
            id: uuidv4(),
            text: "آیا سفیر اسنپ به موقع میرسد؟",
            options: [
                { key: 1, text: "اصلا" },
                { key: 2, text: "بد نیست" },
                { key: 3, text: "خوبه" },
            ]
        }, {
            id: uuidv4(),
            text: "آیا از قیمت های اسنپ راضی هستید؟",
            options: [
                { key: 1, text: "اصلا" },
                { key: 2, text: "بد نیست" },
                { key: 3, text: "خوبه" },
            ]
        }
    ]
};

export default InitialData