import { TrackButton } from '../components/TrackButton';

// In Typescript immer mit export default function
export default function Home() {

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