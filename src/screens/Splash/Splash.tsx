import React, { useContext } from 'react';
//@ts-ignore
import AnimatedSplash from 'react-native-animated-splash-screen';
import { Images } from 'images';
import { logoColors } from 'styles/constant.styles';
import { AppContext } from 'contexts/AppContext';
import { AppWrapper } from 'components/AppWrapper';

const Splash: React.FC = ({ children }) => {
    const { isAppLoaded } = useContext(AppContext);
    return (
        <>
            <AnimatedSplash
                translucent={false}
                isLoaded={isAppLoaded}
                logoImage={Images.loader}
                backgroundColor={isAppLoaded ? logoColors.orange : logoColors.blue}
                logoHeight={100}
                logoWidth={100}
                disableBackgroundImage={true}
            >
                <AppWrapper>{children}</AppWrapper>
            </AnimatedSplash>
        </>
    );
};

export { Splash };
