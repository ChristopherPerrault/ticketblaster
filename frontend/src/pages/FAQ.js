import React, { useState } from "react";
import "../index.css";

export default function FAQ() {
    document.title = "TicketBlaster | FAQ";

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }
    return (
        <div>
            <div className="wrapper">
                <h1 className="faq">Frequently Asked Questions</h1>
                <div className="accordion">
                    {data.map((item, i) => (
                        <div className="item">
                            <div className="question" onClick={() => toggle(i)}>
                                <h3>{item.question}</h3>
                                <span>{selected === i ? "-" : "+"}</span>
                            </div>
                            <div className={selected === i ? "answer show" : "answer"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


const data = [
    {
        question: "Can I sell my tickets on TicketBlaster?",
        answer: "No, sadly this is not yet a feature of our website but we are working on it so stay tuned!😉",
    },
    {
        question: "Can I access TicketBlaster on my phone?",
        answer: "Yes you can through your mobile device's web browser, however, we are working on a mobile application for Android and Apple devices and it should be available within the next year."
    },
    {
        question: "How do I access my account?",
        answer: "After signing up and logging in to the website, you will see a tab labelled 'My Account'. Click on this tab and once you do, you will be able to view and even edit your current information.",
    },
    {
        question: "How will I receive my tickets after my purchase?",
        answer: "Due to the pandemic, we switched all our tickets to be online and contactless. Please be sure you entered the proper email upon registration, because once you finalize your purchase, the tickets will be emailed to you within 24 hours to the event.",
    },
    {
        question: "How can I contact TicketBlaster?",
        answer: "We here at TicketBlaster want to make sure all of our clients/members receive the best customer service we can offer. In order to contact us, simply click on the 'Contact' tab and click on one of the icons to chat with us on any platform.",
    },
    {
        question: "How do I get a refund?",
        answer: "Here at TicketBlaster we offer a full cash refund if the event is canceled for any reason. However, in other cases, we have 3 options of refunds which are: 1) Anytime up to 24 hours before the event, a full refund will be given. 2) 24 hours exactly before the event, a 50% refund will be given. 3) Less than 24 hours before the event, a refund is not possible, but we can offer a credit that can be used to purchase tickets to any other event we offer. For any further question, please do not hesitate to contact us."
    }
]
