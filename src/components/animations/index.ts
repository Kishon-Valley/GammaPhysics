import { FreeFallSimulation } from '../../simulations/NewtonianMechanics/FreeFallSimulation';
import { OscillationsSimulation } from '../../simulations/Oscillations/OscillationsSimulation';
import { ConservationLawsSimulation } from '../../simulations/ConservationLaws/ConservationLawsSimulation';
import { NewtonLawsAnimation } from './NewtonLawsAnimation';

const animations = {
  'newton-laws-animation': FreeFallSimulation, // Updated to use FreeFallSimulation
  'oscillations-animation': OscillationsSimulation, // Using new Oscillations implementation
  'conservation-animation': ConservationLawsSimulation, // Using new Conservation Laws implementation
  'relativity-animation': NewtonLawsAnimation, // Temporary, will implement later
};

export default animations;
