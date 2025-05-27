### INTRODUCTION

A **driven oscillator** is a system that is subjected to an external periodic force in addition to any restoring and damping forces. When the frequency of the driving force matches the natural frequency of the system, a phenomenon called **resonance** occurs, leading to maximum amplitude of oscillation.

![Driven Oscillator System](/images/classical-mechanics/oscillations/driven-oscillator.svg)

*Figure 1: A driven oscillator system showing a mass-spring system with both damping and an external periodic driving force F₍ᵤ₎(t).*

### **Driven Oscillations and Their Behavior**

In real-world systems, oscillators rarely operate in isolation. External forces often act on the system, providing energy to maintain or enhance the oscillations. These external forces, when applied periodically, create what we call driven oscillations. The driving force typically follows a sinusoidal pattern, expressed as F(t) = F₀cos(ωt), where F₀ represents the force amplitude and ω is its angular frequency.

The behavior of a driven oscillator is governed by a second-order differential equation that combines the effects of inertia, damping, and both the restoring and driving forces:

$$
m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F_0\cos(\omega t)
$$

This equation encapsulates the interplay between mass (m), damping coefficient (b), spring constant (k), and the driving force parameters. After initial transients fade away, the system settles into a steady-state motion where it oscillates at the driving frequency:

$$
x(t) = A\cos(\omega t - \phi)
$$

The amplitude A of these steady-state oscillations depends on the system parameters:

$$
A = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2\beta\omega)^2}}
$$

### **The Phenomenon of Resonance**

![Resonance Curves](/images/classical-mechanics/oscillations/resonance-curves-enhanced.svg)

*Figure 2: Resonance curves illustrating system response for different damping ratios (ζ). The upper graph shows the amplitude ratio (A/A₀) versus frequency ratio (ω/ω₀), with clear markers for resonance peak and half-power points. The lower graph displays the phase angle (φ) between the driving force and displacement, showing the critical 90° phase shift at resonance. Different curves represent varying damping ratios from underdamped (ζ = 0.1) to overdamped (ζ = 2.0) conditions.*

Resonance represents a crucial phenomenon in driven oscillations. It occurs when the driving frequency matches the system's natural frequency (ω₀ = √(k/m)). At resonance, the system exhibits its maximum amplitude of oscillation, and energy transfer from the driving force becomes most efficient. The phase difference between the force and displacement reaches exactly 90°, creating optimal conditions for energy transfer.

The sharpness of the resonance peak is characterized by the quality factor Q:

$$
Q = \frac{\omega_0}{2\beta} = \frac{\omega_0}{b/m}
$$

Systems with high Q values display sharp, narrow resonance peaks, indicating low damping and high sensitivity to frequency matching. Conversely, low Q values result in broader peaks, showing higher damping and more gradual frequency response.

### **Phase Relationships and Energy Transfer**

The phase difference φ between the driving force and displacement varies with frequency:

$$
\phi = \tan^{-1}\left(\frac{2\beta\omega}{\omega_0^2 - \omega^2}\right)
$$

This phase relationship is crucial for understanding energy transfer in the system. At low frequencies (ω << ω₀), the force and displacement are nearly in phase. At resonance (ω = ω₀), they maintain a 90° phase difference, while at high frequencies (ω >> ω₀), they become nearly opposite in phase.

The average power delivered by the driving force follows the relationship:

$$
P_{avg} = \frac{1}{2}F_0v_0\cos(\phi)
$$

### **Real-World Applications**

Driven oscillations and resonance find applications across various fields:

Musical instruments utilize resonant cavities, air columns, and membranes to produce and amplify sound. In electronics, radio and television systems employ electrical resonance for tuning and signal filtering. Engineers must carefully consider resonance when designing bridges, buildings, and vehicle suspension systems to avoid catastrophic failures. Medical technology harnesses resonance in MRI machines and ultrasound devices for both imaging and therapeutic purposes.

### **Practice Problems**

### Problem 1: Resonance Analysis
A driven oscillator consists of a 0.2 kg mass attached to a spring (k = 80 N/m) with damping coefficient b = 0.4 N⋅s/m. A periodic force F(t) = 5cos(ωt) N is applied.

a) Calculate the natural frequency of the system
b) Find the quality factor
c) Determine the amplitude at resonance
d) Calculate the phase difference when ω = 0.5ω₀

**Solution:**

a) Natural frequency:
   $$
   \omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{80}{0.2}} = 20\text{ rad/s}
   $$

b) Quality factor:
   $$
   \beta = \frac{b}{2m} = \frac{0.4}{2(0.2)} = 1\text{ s}^{-1}
   $$
   $$
   Q = \frac{\omega_0}{2\beta} = \frac{20}{2(1)} = 10
   $$

c) Resonant amplitude:
   $$
   A_{res} = \frac{F_0}{2m\beta\omega_0} = \frac{5}{2(0.2)(1)(20)} = 0.625\text{ m}
   $$

d) Phase at ω = 0.5ω₀:
   $$
   \phi = \tan^{-1}\left(\frac{2(1)(10)}{400 - 100}\right) = 0.13\text{ rad} = 7.4°
   $$

### Problem 2: Power and Energy Analysis
A driven oscillator has F₀ = 8 N, m = 0.4 kg, k = 160 N/m, and b = 1.6 N⋅s/m. Calculate:

a) The resonant frequency
b) The maximum amplitude of oscillation
c) The power delivered at resonance
d) The bandwidth of the resonance curve

**Solution:**

a) Resonant frequency:
   $$
   \omega_0 = \sqrt{\frac{160}{0.4}} = 20\text{ rad/s}
   $$

b) Maximum amplitude:
   $$
   A_{max} = \frac{8}{2(0.4)(2)(20)} = 0.25\text{ m}
   $$

c) Power at resonance:
   $$
   v_0 = \omega_0A_{max} = 20(0.25) = 5\text{ m/s}
   $$
   $$
   P_{avg} = \frac{1}{2}(8)(5) = 20\text{ W}
   $$

d) Bandwidth:
   $$
   \Delta\omega = \frac{\omega_0}{Q} = \frac{20}{5} = 4\text{ rad/s}
   $$

### Problem 3: Frequency Response
A driven oscillator has m = 0.3 kg, k = 120 N/m, b = 0.9 N⋅s/m, and F₀ = 6 N. Find:

a) The amplitude ratio A/A_{res} at ω = 1.5ω₀
b) The phase difference at this frequency
c) The frequency where amplitude is 1/√2 of resonant amplitude
d) The energy stored in the system at resonance

**Solution:**

a) At ω = 1.5ω₀:
   $$
   \frac{A}{A_{res}} = \frac{1}{\sqrt{(1.25)^2 + 0.25}} = 0.667
   $$

b) Phase at 1.5ω₀:
   $$
   \phi = \tan^{-1}\left(\frac{3\beta\omega_0}{-1.25\omega_0^2}\right) = 2.498\text{ rad} = 143.1°
   $$

c) Half-power frequency:
   $$
   \omega = \omega_0\sqrt{1 + \frac{1}{2Q^2}} = 21.2\text{ rad/s}
   $$

d) Energy at resonance:
   $$
   E = \frac{1}{2}kA_{res}^2 = \frac{1}{2}(120)(0.2)^2 = 2.4\text{ J}
   $$



### Problem 4: Resonance Bandwidth Analysis
A precision instrument uses a driven oscillator with m = 0.25 kg, k = 100 N/m, and Q = 50. The driving force has amplitude 4 N.

a) Calculate the frequencies at which the amplitude is 70.7% of the resonant amplitude
b) Find the power dissipated at these frequencies
c) Determine the phase difference between force and displacement at these frequencies
d) Calculate the time taken to reach 95% of steady-state amplitude

**Solution:**

a) The half-power frequencies occur at:
   $$
   \omega_{1,2} = \omega_0(1 \pm \frac{1}{2Q})
   $$
   where $\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{100}{0.25}} = 20\text{ rad/s}$
   $$
   \omega_1 = 20(1 - \frac{1}{100}) = 19.8\text{ rad/s}
   $$
   $$
   \omega_2 = 20(1 + \frac{1}{100}) = 20.2\text{ rad/s}
   $$

b) Power at half-power points:
   $$
   P = \frac{1}{2}P_{max} = \frac{1}{2}(\frac{F_0^2}{2b}) = \frac{F_0^2}{4b} = 2\text{ W}
   $$

c) Phase difference at half-power points:
   $$
   \phi = \tan^{-1}(1) = 45°
   $$

d) Time to reach 95% steady state:
   $$
   t = \frac{3Q}{\omega_0} = \frac{3(50)}{20} = 7.5\text{ seconds}
   $$

### Problem 5: Coupled Driven Oscillators
Two masses (m₁ = m₂ = 0.2 kg) are connected by springs (k = 150 N/m) and share a common driving force F(t) = 6cos(ωt) N. The damping coefficient is b = 0.8 N⋅s/m.

a) Find the normal mode frequencies
b) Calculate the resonant amplitudes for each mode
c) Determine the frequency range where the response amplitude exceeds 75% of maximum
d) Find the energy distribution between the masses at resonance

**Solution:**

a) Normal mode frequencies:
   $$
   \omega_1 = \sqrt{\frac{k}{m}} = \sqrt{\frac{150}{0.2}} = 27.39\text{ rad/s}
   $$
   $$
   \omega_2 = \sqrt{\frac{3k}{m}} = \sqrt{\frac{450}{0.2}} = 47.43\text{ rad/s}
   $$

b) Resonant amplitudes:
   Mode 1: 
   $$
   A_1 = \frac{F_0}{2m\omega_1\beta} = \frac{6}{2(0.2)(27.39)(2)} = 0.274\text{ m}
   $$
   Mode 2:
   $$
   A_2 = \frac{F_0}{2m\omega_2\beta} = \frac{6}{2(0.2)(47.43)(2)} = 0.158\text{ m}
   $$

c) 75% response bandwidth:
   $$
   \Delta\omega = \frac{\omega_0}{Q}\sqrt{\frac{1}{(0.75)^2} - 1} = 3.2\text{ rad/s}
   $$

d) Energy distribution:
   $$
   E_1 = \frac{1}{2}kA_1^2 = 5.63\text{ J}
   $$
   $$
   E_2 = \frac{1}{2}kA_2^2 = 1.87\text{ J}
   $$

### Problem 6: Forced Oscillations with Variable Frequency
A driven oscillator (m = 0.15 kg, k = 60 N/m) is subjected to a force F(t) = 3cos(ωt) N. The driving frequency is slowly varied from 0.5ω₀ to 2ω₀.

a) Plot the amplitude ratio A/A_{res} vs. ω/ω₀ for three different damping ratios (ζ = 0.1, 0.5, 1.0)
b) Calculate the maximum energy stored in the system for each damping ratio
c) Find the power factor at resonance for each case
d) Determine the frequency bandwidth for which the power delivered exceeds 50% of maximum

**Solution:**

a) Amplitude ratio equation:
   $$
   \frac{A}{A_{res}} = \frac{1}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}
   $$
   where r = ω/ω₀
   
   Values calculated at r = 0.5, 1.0, 1.5, 2.0 for each ζ
   (Results shown graphically)

b) Maximum energy stored:
   For ζ = 0.1:
   $$
   E_{max} = \frac{1}{2}kA_{res}^2 = \frac{1}{2}(60)(0.5)^2 = 7.5\text{ J}
   $$
   Similar calculations for other ζ values

c) Power factor at resonance:
   $$
   \cos\phi = \frac{2\zeta}{\sqrt{1 + 4\zeta^2}}
   $$
   For ζ = 0.1: cos φ = 0.196
   For ζ = 0.5: cos φ = 0.707
   For ζ = 1.0: cos φ = 0.894

d) 50% power bandwidth:
   $$
   \Delta\omega = \omega_0\sqrt{\frac{1 + 4\zeta^2}{4\zeta^2}}
   $$
   Results for each ζ value


### **Key Takeaways**

Driven oscillations represent a fundamental concept in physics and engineering, where external periodic forces interact with natural oscillatory systems. Understanding resonance conditions, phase relationships, and energy transfer mechanisms is crucial for practical applications. The behavior of these systems is characterized by their natural frequency, damping ratio, and quality factor, which together determine the response to external driving forces.
