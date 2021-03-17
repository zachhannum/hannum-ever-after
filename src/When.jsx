import Grid from '@material-ui/core/Grid';
import Block from './Block';
import Countdown from 'react-countdown';
import ScheduleIcon from '@material-ui/icons/Schedule';

const When = () => {

    const backgroundColor = {
        backgroundColor: '#fff8f7'
    }

    const countdownRenderer = ({ days, hours, minutes, seconds }) => {
        let dayText = days !== 1 ? 'DAYS' : 'DAY';
        let hourText = hours !== 1 ? 'HOURS' : 'HOUR';
        let minuteText = minutes !== 1 ? 'MINUTES' : 'MINUTE';
        let secondText = seconds !== 1 ? 'SECONDS' : 'SECOND';
        return <p className={'paragraphBlockText'}>{days} {dayText}, {hours} {hourText}, {minutes} {minuteText}, AND {seconds} {secondText} LEFT!</p>;
    };

    return (
        <div style={backgroundColor}>
            <Block>
                <Grid item xs={12}>
                    <div className={'divTitleTextStyle'}>
                        <p>WHEN</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={'blockDivStyle'}>
                        <div className={'verticalCenter'}>
                            <ScheduleIcon style={{
                                color: 'black',
                                display: 'block',
                                margin: 'auto',
                                position: 'relative',
                                fontSize: '4vw'
                            }} />
                            <h2 className={'headerTwoBlockText'}>November 6th, 2021</h2>
                            <h2 className={'headerTwoBlockText'}>4:00 PM</h2>
                            <Countdown renderer={countdownRenderer} date={new Date('November 6, 2021 15:00:00 EST')} />
                        </div>
                    </div>
                </Grid>
            </Block>
        </div>
    );
};

export default When;