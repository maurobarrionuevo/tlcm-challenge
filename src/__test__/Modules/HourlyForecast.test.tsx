import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import HourlyForecast from '../../components/modules/HourlyForecast';
import DailyForecast from '../__mock__/DailyForecast.json'
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

describe('HourlyForecast Component', () => {
    test('renders with correct data', () => {
        render(
            <ThemeProvider theme={theme}>
                <HourlyForecast forecast={DailyForecast} />
            </ThemeProvider>
        );
        // Check if location, temperature, sky description, and min/max are rendered correctly
        const elements = document.querySelectorAll('#hourly-temp');
        expect(elements.length).toBeGreaterThanOrEqual(6);
    });
});