import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { use100vh } from 'react-div-100vh';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from './theme';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Fade } from 'react-awesome-reveal';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ButtonCSS from '../styles/headerButton.module.css';

const TopSection = () => {
  const height = use100vh();
  const matches = useMediaQuery('(min-width:600px)');
  useEffect(() => {
    console.log('the height is', height);
  }, [height]);
  return (
    <div id={'back-to-top-anchor'}>
      <Grid
        className={'area'}
        container
        style={{minHeight: height ? height : '100vh'}}
      >
        <Grid item>
          <ul className="circles">
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
          </ul>
        </Grid>
        <Grid item container style={{backgroundColor: theme.palette.primary}}>
          <Grid container justify={'center'} item direction={'column'}>
            <Grid item>
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                delay={800}
                duration={500}
              >
                <Grid style={{marginBottom: 10}} item>
                  <Typography variant={!matches ? 'h3' : 'h2'}>Hi,</Typography>
                </Grid>
                <Grid style={{marginBottom: 10}} item>
                  <Typography variant={!matches ? 'h3' : 'h2'}>
                    I'm Gaurav {matches ? 'Thakur' : null}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{fontSize: matches ? 24 : null}}
                    variant={!matches ? 'body1' : 'h3'}
                  >
                    Nothing much, just a casual learner who loves to code.
                  </Typography>
                </Grid>
              </Fade>
            </Grid>
            <Fade triggerOnce direction={'up'} delay={1200}>
              <Grid
                direction={'column'}
                item
                container
                style={{marginTop: 100}}
              >
                <Grid item>
                  <Typography
                    style={{borderBottom: '1px solid white', paddingBlock: 3  }}
                    variant={'overline'}
                  >
                    Contact Me
                  </Typography>
                </Grid>
                <div>
                  <div
                    style={{
                      position: 'absolute',
                      flexDirection: 'row',
                      display: 'flex',
                    }}
                  >
                    <Fade
                      cascade
                      triggerOnce
                      direction={'up'}
                      delay={1500}
                      duration={500}
                      className={ButtonCSS.header__button}
                    >
                      <TwitterIcon
                        onClick={() =>
                          window.open(
                            'https://twitter.com/gauravcodes',
                            '_blank',
                          )
                        }
                      />
                      <GitHubIcon
                        // className={ButtonCSS.header__button}
                        onClick={() =>
                          window.open(
                            'https://github.com/thegauravthakur',
                            '_blank',
                          )
                        }
                      />
                      <LinkedInIcon
                        // className={ButtonCSS.header__button}
                        onClick={() =>
                          window.open(
                            'https://linkedin.com/in/gauravcodes',
                            '_blank',
                          )
                        }
                      />
                      <EmailIcon
                        // className={ButtonCSS.header__button}
                        onClick={() =>
                          (window.location.href = 'mailto:gthakur581@email.com')
                        }
                      />
                    </Fade>
                  </div>
                </div>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSection;
