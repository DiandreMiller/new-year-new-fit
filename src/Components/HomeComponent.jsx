import { Link } from 'react-router-dom';
import exerciseWithTrainer from '../Images/exercisingWithTrainer.jpeg';
import './HomeComponent.css'
import MotivationalQuotes from './MotivationalQuotes';

const HomeComponent = () => {
    return (
        <div>
            
            <img className='trainer' src={exerciseWithTrainer} alt='trainer'  />
            <p className="story">
                It's that time of year again where we all say "New Year new me". 
                We head to the gym, go all out, we are completely exhausted by the end of the 
                first day, but we feel good because we made a plan and we did something. 
                The next day we wake up, we can barely move and every single part of our bodies 
                hurt and we barely want to get out of the bed. BUT we made a commitment so we go to 
                the gym the next day and do the exact same thing. At the end of the week we are 
                hate the gym, we hate working out, we hate our bodies, we hate everything, 
                and we never want to go back to the gym again. <br /><br />

                Slowly but surely, we begin to lose motivation and instead of going to the gym
                daily, we go a couple of times a week, then we go about once a week, then we 
                start making excuses as to why we can't go to the gym, and then we stop going 
                altogether. <br /><br />

                Anywhere between 80-90% of people who join a gym in January will completely 
                quit within 3 months. You may have done this in the past, or you may be on 
                that exact path now. Doing the same thing will not give you different results, 
                so let's simplify the process, and make sure that you're not burnt out
                after your first day so you can actually enjoy the process of getting fit and not 
                feel like you're torturing yourself. Click below to get started!
            </p>
            <MotivationalQuotes />
            <Link className='button' to='/users/new'><button>Get Started &gt;&gt;</button></Link>
        </div>
    );
};

export default HomeComponent;
