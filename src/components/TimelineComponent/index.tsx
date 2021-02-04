import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import * as Icon from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import { Container } from './styles'
import Typography from '@material-ui/core/Typography';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


interface dataProps{
    cardTitle:string
    cardSubtitle:string
    url:string
}

const TimelineComponent: React.FC = () => {
    const films:dataProps[] = 
    [
        {
            
            cardTitle: "Star Wars Ameaça Fantasma",
            cardSubtitle:"Episodio 1",                    
            url:"https://i.pinimg.com/originals/79/46/01/794601983931029e4b601e91c6cd1586.jpg"
        },
        {
           
            cardTitle: "Star Wars Ataque dos Clones",
            cardSubtitle:"Episodio 2",
            url:"https://i.pinimg.com/originals/9e/e7/76/9ee776c14b3737956c151edb390b8d6b.jpg"
        },
        {
            
            cardTitle: "Star Wars a Vingança dos Sith",
            cardSubtitle:"Episodio 3",
            url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99351fbb-347e-45d9-9f2a-4f3755d1e7a3/d46wrbb-2d27310a-3240-43a8-b61f-def9a76b6c98.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTkzNTFmYmItMzQ3ZS00NWQ5LTlmMmEtNGYzNzU1ZDFlN2EzXC9kNDZ3cmJiLTJkMjczMTBhLTMyNDAtNDNhOC1iNjFmLWRlZjlhNzZiNmM5OC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.6oPN0krau8wKz63guDhQR78g9-70LGJVFHjgM6BQ-1I"
        },
        {
           
            cardTitle: "Star Wars uma Nova Esperança",            
            cardSubtitle:"Episodio 4",
            url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c68aede5-dba2-429a-a6e7-49d119075ee0/d5jamuw-d6c6ee8c-4453-4115-a346-c46c927f488a.jpg/v1/crop/w_248,h_350,x_0,y_0,scl_0.14139110604333,q_70,strp/star_wars___episode_iv_by_abonny_d5jamuw-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NDkiLCJwYXRoIjoiXC9mXC9jNjhhZWRlNS1kYmEyLTQyOWEtYTZlNy00OWQxMTkwNzVlZTBcL2Q1amFtdXctZDZjNmVlOGMtNDQ1My00MTE1LWEzNDYtYzQ2YzkyN2Y0ODhhLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mdq3gV_HdJ9c7dE7-xwy3vVZRREYbwB8Wk1l-QUyo-M"
        },
        {
            
            cardTitle: "Star Wars Imperio Contra Ataca",
            cardSubtitle:"Episodio 5",
            url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dc06b267-faa6-4315-87d0-33c51f462a8c/d9ntetp-f9faff3b-c9f3-486c-900b-79cf4411374b.jpg/v1/fill/w_600,h_780,q_75,strp/star_wars___the_empire_strikes_back_by_ayudym_d9ntetp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03ODAiLCJwYXRoIjoiXC9mXC9kYzA2YjI2Ny1mYWE2LTQzMTUtODdkMC0zM2M1MWY0NjJhOGNcL2Q5bnRldHAtZjlmYWZmM2ItYzlmMy00ODZjLTkwMGItNzljZjQ0MTEzNzRiLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WgGhlhoiGorFzwFpkbJ_14NGJVAz22uEmAt2AaNKBfs"
        },
        {
            
            cardTitle: "Star Wars O Retorno de Jedi",
            cardSubtitle:"Episodio 6",      
            url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dc06b267-faa6-4315-87d0-33c51f462a8c/d9ntij0-989bdc09-1fe8-4c31-884f-2763045e7db7.jpg/v1/fill/w_600,h_783,q_75,strp/star_wars___return_of_the_jedi_by_ayudym_d9ntij0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03ODMiLCJwYXRoIjoiXC9mXC9kYzA2YjI2Ny1mYWE2LTQzMTUtODdkMC0zM2M1MWY0NjJhOGNcL2Q5bnRpajAtOTg5YmRjMDktMWZlOC00YzMxLTg4NGYtMjc2MzA0NWU3ZGI3LmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CWEY7MVbRru65kSElzz6BD6voR159DhC7p54NjN7f90"
        },
        {
            
            cardTitle: "Star Wars O Despertar da Força",
            cardSubtitle:"Episodio 7",                    
            url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d439e20-b828-46f5-8979-6e272a0d73ac/d8e50sl-cb91ae18-c91e-4c9b-8bc3-790f3b19b813.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmQ0MzllMjAtYjgyOC00NmY1LTg5NzktNmUyNzJhMGQ3M2FjXC9kOGU1MHNsLWNiOTFhZTE4LWM5MWUtNGM5Yi04YmMzLTc5MGYzYjE5YjgxMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.JwFfv8GmQ5ZCzn5OhYd8gRCF8M87fnYJmXTKCyg9UMo"
        },
        {
            
            cardTitle: "Star Wars Os Últimos Jedi",
            cardSubtitle:"Episodio 8",                    
            url:"https://alternativemovieposters.com/wp-content/uploads/2020/06/Derek-Payne_lastjedi.jpg"
        },
        {
            
            cardTitle: "Star Wars Ascensão Skywalker",
            cardSubtitle:"Episodio 9",                    
            url:"https://posterspy.com/wp-content/uploads/2019/12/rise-of-skywalker-posterswRVB-01-1500x2121.png"
        }       
    ]

    const classes = useStyles();

    return (
      <>
      <Timeline align="alternate">
        {films.map(item =>{
            return(
                
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                            <Icon.StarBorder />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Container>
                                    <img src={item.url} alt=""/>
                                    <div className="description">
                                        <Typography 
                                            variant="h6" 
                                            component="h1"
                                        >
                                            {item.cardTitle}
                                        </Typography>
                                        <Typography>{item.cardSubtitle}</Typography>
                                    </div>
                                </Container>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                
            )
        })}
        </Timeline>
      </>
    );
}

export default TimelineComponent;