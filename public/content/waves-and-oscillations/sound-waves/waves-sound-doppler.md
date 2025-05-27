## Sound Waves: Doppler Effect in Sound  
*Understanding Frequency Shifts Due to Relative Motion*  

---

### **Introduction to the Doppler Effect**  
The **Doppler effect** is a phenomenon where the observed frequency of a wave changes due to the relative motion between the source of the wave and the observer. In the context of sound, this effect explains why a siren sounds higher-pitched as it approaches and lower-pitched as it recedes. The Doppler effect has deep applications in fields of acoustics, astronomy, and medical imaging, and it provides a fundamental tool for measuring velocities in various applications.

![Doppler Effect Basics](/content/waves-and-oscillations/sound-waves/images/doppler-basic.svg)

---

## **Physics of the Doppler Effect**  
### **Basic Principle**  
When a sound source moves toward an observer, the sound waves are compressed, resulting in a higher observed frequency. Conversely, when the source moves away, the waves are stretched, leading to a lower observed frequency. The same effect occurs if the observer is moving relative to the source.  

### **Mathematical Formulation**  
The observed frequency ($f'$) depends on the speed of sound ($v$), the speed of the source ($v_s$), the speed of the observer ($v_o$), and the emitted frequency ($f$):  

1. **Source Moving Toward Observer**:  
   $$
   f' = \frac{v}{v - v_s} f
   $$  

2. **Source Moving Away from Observer**:  
   $$
   f' = \frac{v}{v + v_s} f
   $$  

3. **Observer Moving Toward Source**:  
   $$
   f' = \frac{v + v_o}{v} f
   $$  

4. **Observer Moving Away from Source**:  
   $$
   f' = \frac{v - v_o}{v} f
   $$  

5. **Both Source and Observer Moving**:  
   $$
   f' = \frac{v \pm v_o}{v \mp v_s} f
   $$  
   Here, the upper signs apply when the source and observer are moving toward each other, and the lower signs apply when they are moving apart.  

---

## **Key Concepts and Examples**  
### **Relative Motion Matters**  
The Doppler effect depends only on the **relative velocity** between the source and observer. For example:  
- If a car is moving at 30 m/s toward a stationary observer, and the speed of sound is 343 m/s, the observed frequency increases by:  
  $$
  f' = \frac{343}{343 - 30} f \approx 1.096 f
  $$  
  This corresponds to a 9.6% increase in frequency.  

### **Everyday Examples**  
- **Ambulance Siren**: As an ambulance approaches, the siren sounds higher-pitched; as it passes and moves away, the pitch drops.  
- **Train Whistle**: A train’s whistle sounds higher as it approaches a station and lower as it departs.  

---

## **Applications of the Doppler Effect**  
### **Medical Imaging (Doppler Ultrasound)**  
- **Blood Flow Measurement**: Doppler ultrasound measures the frequency shift of sound waves reflected off red blood cells to determine blood flow velocity.  
- **Fetal Monitoring**: Used to monitor the heartbeat of a fetus during pregnancy.  

![Doppler Effect Applications](/content/waves-and-oscillations/sound-waves/images/doppler-applications.svg)

### **Astronomy (Redshift and Blueshift)**  
- **Redshift**: When a star or galaxy moves away from Earth, its light shifts to longer (redder) wavelengths.  
- **Blueshift**: When a star or galaxy moves toward Earth, its light shifts to shorter (bluer) wavelengths.  

### **Radar and Sonar**  
- **Speed Detection**: Police radar guns use the Doppler effect to measure vehicle speeds.  
- **Submarine Detection**: Sonar systems detect submarines by analyzing frequency shifts in reflected sound waves.  

---

## **Advanced Topics**  
### Beyond Classical Doppler: Relativistic Effects and Shock Waves

When objects move at everyday speeds, the classical Doppler effect describes frequency shifts accurately. However, as speeds approach a significant fraction of light speed, we must consider Einstein's special relativity. The classical formula breaks down because it doesn't account for time dilation and length contraction.

The relativistic Doppler formula captures these effects through a more complex relationship:

$$
f' = f\sqrt{\frac{1 + \beta}{1 - \beta}}
$$

where $\beta = v/c$ represents the ratio of relative velocity to light speed. This formula reveals subtle but crucial differences from the classical case. Even when source and observer move perpendicular to each other, a frequency shift occurs - something classical theory doesn't predict. This transverse Doppler effect represents pure time dilation, offering direct evidence for special relativity.

Astronomers regularly use relativistic Doppler shifts to study high-speed cosmic objects. Spectral lines from galaxies moving at significant fractions of light speed show shifts that only relativistic formulas can explain. These measurements help map the universe's large-scale structure and motion.

#### Breaking the Sound Barrier: Shock Waves and Sonic Booms

When an object moves faster than sound (supersonic speed), it enters a regime where sound waves can't "get out of the way" fast enough. The air molecules pile up, creating a cone-shaped region of compressed air called a shock wave. The angle θ of this cone, known as the Mach angle, relates to the object's speed:

$$
\sin \theta = \frac{v_{\text{sound}}}{v_{\text{object}}} = \frac{1}{M}
$$

where $M$ is the Mach number - the ratio of object speed to sound speed.

![Shock Wave Formation](/content/waves-and-oscillations/sound-waves/images/shock-wave.svg)

The shock wave manifests as a sonic boom - a sharp crack or bang when the pressure discontinuity reaches an observer. Unlike normal sound waves, shock waves:
- Create nearly instantaneous pressure changes
- Carry significant energy, often causing structural damage
- Form complex patterns when interacting with surfaces or other shock waves

Modern aircraft design carefully considers shock wave formation. Supersonic aircraft often feature swept wings and area-ruled fuselages to minimize shock wave intensity. The characteristic "double boom" heard during supersonic flyovers comes from shock waves forming at the aircraft's nose and tail.


---

## **Practice Problems: Advanced Doppler Effects**

#### Problem 1: Relativistic Doppler in Astronomy
A distant galaxy emits hydrogen alpha radiation at its rest wavelength of 656.3 nm.

**Question**: 
If this radiation is observed at 852.3 nm on Earth, determine:
a) The galaxy's velocity relative to Earth
b) Whether the galaxy is moving toward or away from Earth

**Solution**:
Using the relativistic Doppler formula:
$$
\frac{\lambda_{observed}}{\lambda_{rest}} = \sqrt{\frac{1 + \beta}{1 - \beta}}
$$

$$
\frac{852.3}{656.3} = \sqrt{\frac{1 + \beta}{1 - \beta}}
$$

Solving for β:
$$
\beta = \frac{(852.3)^2 - (656.3)^2}{(852.3)^2 + (656.3)^2} = 0.26
$$

Therefore:
a) v = 0.26c = 78,000 km/s
b) The galaxy is moving away from Earth (redshift)

#### Problem 2: Supersonic Aircraft Shock Wave
A fighter jet flies at Mach 1.5 at an altitude of 10,000 meters.

**Question**: 
a) Calculate the Mach angle θ of the shock cone
b) How far from the ground track will a person hear the sonic boom if the shock wave travels straight to the ground?

**Solution**:
a) Using the Mach angle formula:
$$
\sin \theta = \frac{1}{M} = \frac{1}{1.5}
$$
$$
\theta = \arcsin(0.667) = 41.8°
$$

b) Distance from ground track:
$$
\text{Distance} = 10,000 \tan(41.8°) = 8,927 \text{ meters}
$$

#### Problem 3: Transverse Doppler Effect
A satellite orbits Earth at 0.01c.

**Question**: 
When the satellite passes directly overhead, what is the observed frequency of its 10 GHz radio transmission due to time dilation alone?

**Solution**:
For transverse motion, the relativistic factor γ gives:
$$
f' = \frac{f}{\sqrt{1 - \beta^2}}
$$
$$
f' = \frac{10 \times 10^9}{\sqrt{1 - (0.01)^2}} = 10.0005 \text{ GHz}
$$

The frequency increases by about 500 kHz due to time dilation.

#### Problem 4: Multiple Shock Waves
A supersonic aircraft flying at Mach 2 releases a flare that travels at Mach 3 in the opposite direction.

**Question**: 
Calculate the angle between the shock waves of:
a) The aircraft
b) The flare
c) The total angle between both shock waves

**Solution**:
a) Aircraft shock wave angle:
$$
\theta_1 = \arcsin(\frac{1}{2}) = 30°
$$

b) Flare shock wave angle:
$$
\theta_2 = \arcsin(\frac{1}{3}) = 19.5°
$$

c) Total angle:
$$
\theta_{total} = 30° + 19.5° = 49.5°
$$

#### Problem 5: Relativistic Doppler Radar
A police radar uses light at frequency 3.0 × 10¹⁴ Hz to measure vehicle speeds.

**Question**: 
What is the difference in frequency between the emitted and received signals when measuring a vehicle moving at 0.1c?

**Solution**:
Using the full relativistic Doppler formula for approaching object:
$$
f' = f\sqrt{\frac{1 + 0.1}{1 - 0.1}} = 3.0 \times 10^{14} \sqrt{\frac{1.1}{0.9}}
$$
$$
f' = 3.32 \times 10^{14} \text{ Hz}
$$

Frequency difference:
$$
\Delta f = 0.32 \times 10^{14} \text{ Hz}
$$

This example, while unrealistic for traffic radar, demonstrates how relativistic effects become significant at high velocities.

---

## **Mathematical Derivation**  
### **Source Moving Toward Observer**  
Consider a source emitting sound waves at frequency $f$ and moving at speed $v_s$ toward a stationary observer. The wavelength ($\lambda$) in front of the source is compressed:  
$$
\lambda' = \frac{v - v_s}{f}
$$  
The observed frequency is:  
$$
f' = \frac{v}{\lambda'} = \frac{v}{v - v_s} f
$$  

### **Observer Moving Toward Source**  
If the observer moves at speed $v_o$ toward a stationary source, the relative speed of sound becomes $v + v_o$. The observed frequency is:  
$$
f' = \frac{v + v_o}{v} f
$$  

---

## **Practical Problems**  
1. **Problem**: A train whistle emits sound at 500 Hz. If the train is moving at 30 m/s toward a stationary observer, what is the observed frequency? (Speed of sound = 343 m/s.)  
   **Solution**:  
   $$
   f' = \frac{343}{343 - 30} \times 500 \approx 548 \, \text{Hz}
   $$  

2. **Problem**: A car moving at 25 m/s emits sound at 400 Hz. What frequency is heard by a stationary observer as the car approaches and recedes?  
   **Solution**:  
   - Approaching:  
     $$
     f' = \frac{343}{343 - 25} \times 400 \approx 431 \, \text{Hz}
     $$  
   - Receding:  
     $$
     f' = \frac{343}{343 + 25} \times 400 \approx 372 \, \text{Hz}
     $$  

---

## **Conclusion**  
The Doppler effect is a fundamental phenomenon that connects wave motion with relative velocity. From everyday experiences like hearing a siren to advanced applications in medicine and astronomy, the Doppler effect provides critical insights into the behavior of waves and the motion of objects. By mastering this concept, we can better understand the world around us and develop technologies that rely on precise frequency measurements.  

*Further Exploration*: Study the **Doppler broadening** of spectral lines in gases or explore how the Doppler effect is used in **weather radar** to track storms.  