import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import WeatherModule from '../../components/WeatherModule';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

test('Renders module container correctly', () => {
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <WeatherModule label="Test module" />
        </ThemeProvider>
    );
    expect(getByText('Test module')).toBeInTheDocument();
});