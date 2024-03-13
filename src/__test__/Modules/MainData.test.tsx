import { render } from '@testing-library/react';
import MainData from '../../components/modules/MainData';
import WeatherDataResponse from '../__mock__/WeatherDataResponse.json'
import '@testing-library/jest-dom'

describe('MainData Component', () => {
    test('renders with correct data', () => {
        const { getByText } = render(<MainData data={WeatherDataResponse} />);
        // Check if location, temperature, sky description, and min/max are rendered correctly
        expect(getByText('Miami')).toBeInTheDocument();
        expect(getByText('22°')).toBeInTheDocument();
        expect(getByText('clear sky')).toBeInTheDocument();
        expect(getByText('Max: 23° - Min:21°')).toBeInTheDocument();
    });
});