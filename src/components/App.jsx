import '../'
import React from "react";
import '../index.css'
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Statiscs } from "./Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { NotificationMessage } from "./Notification/Notification";

export class App extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handlerValue = (option) => {
        this.setState(prev => ({
           [option]: prev[option] + 1
       }))
    }

    countTotalFeedback = () => Object.values(this.state).reduce((acc, value) => acc + value, 0);

    countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const value = this.countTotalFeedback();
    return good > 0 ? Math.round((good / value) * 100) : 0;
    }
      
    render() {
        const keys = Object.keys(this.state);
        const { good, neutral, bad } = this.state;
       
        return (
            <>
                <Container>
                    <Section title={'Please leave feedback'}>
                        <FeedbackOptions
                            options={keys}
                            onLeaveFeedback={this.handlerValue}
                        />
                    </Section>
                </Container>
                <Container>
                    <Section title={'Statistic'}>
                        {this.countTotalFeedback() === 0 ? (
                            <NotificationMessage message={'There is no feedback'} />
                        ) : (
                            <Statiscs
                                goodValue={good}
                                netrualValue={neutral}
                                badValue={bad}
                                total={this.countTotalFeedback()}
                                positiveFeedback={this.countPositiveFeedbackPercentage()}
                            />
                        )}
                    </Section>
                </Container>
            </>
        );
    }
}
