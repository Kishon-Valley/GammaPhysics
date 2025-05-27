import { Vector3 } from 'three';
import { Slider } from '../../components/ui/slider';

interface NewtonianControlsProps {
  parameters: {
    mass: number;
    initialVelocity: Vector3;
    gravity: number;
    friction: number;
  };
  onParameterChange: (newParameters: any) => void;
}

export const NewtonianControls = ({
  parameters,
  onParameterChange,
}: NewtonianControlsProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-medium">Simulation Controls</h3>
      <p className="mb-4 text-sm text-gray-600">
        Adjust these values to see how they affect the object's motion. Each control simulates a real-world physical property.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Mass (kg)
          </label>
          <p className="mb-2 text-xs text-gray-500">
            How heavy the object is. A heavier object has more inertia (resistance to motion changes) but falls at the same speed!
          </p>
          <Slider
            value={[parameters.mass]}
            min={0.1}
            max={10}
            step={0.1}
            onValueChange={(value) =>
              onParameterChange({ ...parameters, mass: value[0] })
            }
          />
          <span className="text-sm text-gray-500">{parameters.mass.toFixed(1)} kg</span>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Initial Velocity X (m/s)
          </label>
          <p className="mb-2 text-xs text-gray-500">
            How fast the object starts moving in the X direction. Like throwing a ball - stronger throw means higher initial speed.
          </p>
          <Slider
            value={[parameters.initialVelocity.x]}
            min={-10}
            max={10}
            step={0.1}
            onValueChange={(value) =>
              onParameterChange({
                ...parameters,
                initialVelocity: new Vector3(
                  value[0],
                  parameters.initialVelocity.y,
                  parameters.initialVelocity.z
                ),
              })
            }
          />
          <span className="text-sm text-gray-500">
            {parameters.initialVelocity.x.toFixed(1)} m/s
          </span>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Initial Velocity Y (m/s)
          </label>
          <p className="mb-2 text-xs text-gray-500">
            How fast the object starts moving in the Y direction. Like throwing a ball - stronger throw means higher initial speed.
          </p>
          <Slider
            value={[parameters.initialVelocity.y]}
            min={-10}
            max={10}
            step={0.1}
            onValueChange={(value) =>
              onParameterChange({
                ...parameters,
                initialVelocity: new Vector3(
                  parameters.initialVelocity.x,
                  value[0],
                  parameters.initialVelocity.z
                ),
              })
            }
          />
          <span className="text-sm text-gray-500">
            {parameters.initialVelocity.y.toFixed(1)} m/s
          </span>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Initial Velocity Z (m/s)
          </label>
          <p className="mb-2 text-xs text-gray-500">
            How fast the object starts moving in the Z direction. Like throwing a ball - stronger throw means higher initial speed.
          </p>
          <Slider
            value={[parameters.initialVelocity.z]}
            min={-10}
            max={10}
            step={0.1}
            onValueChange={(value) =>
              onParameterChange({
                ...parameters,
                initialVelocity: new Vector3(
                  parameters.initialVelocity.x,
                  parameters.initialVelocity.y,
                  value[0]
                ),
              })
            }
          />
          <span className="text-sm text-gray-500">
            {parameters.initialVelocity.z.toFixed(1)} m/s
          </span>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Gravity Strength (m/s²)
          </label>
          <p className="mb-2 text-xs text-gray-500">
            The strength of gravity's pull (9.81 m/s² on Earth). Higher values mean stronger downward pull, like on a bigger planet!
          </p>
          <Slider
            value={[parameters.gravity]}
            min={0}
            max={20}
            step={0.1}
            onValueChange={(value) =>
              onParameterChange({ ...parameters, gravity: value[0] })
            }
          />
          <span className="text-sm text-gray-500">
            {parameters.gravity.toFixed(1)} m/s²
          </span>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Air Resistance
          </label>
          <p className="mb-2 text-xs text-gray-500">
            How much the air slows down the object. Like the difference between dropping a feather and a bowling ball!
          </p>
          <Slider
            value={[parameters.friction]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={(value) =>
              onParameterChange({ ...parameters, friction: value[0] })
            }
          />
          <span className="text-sm text-gray-500">
            {parameters.friction.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
