import { TrackButton } from '../components/TrackButton';

export const Home = () => {

    const handleClick = () => {
    }

    return (
        <div>
            <div className="p-10"> Home</div>

            <div className="flex gap-4 justify-center">
                <TrackButton label="Start tracking" onClick={handleClick} variant="primary" />
            </div>
        </div>
    );
};