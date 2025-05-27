# Beats

### Introduction to Beats

Beats are a phenomenon that occurs when two waves of slightly different frequencies interfere, resulting in a periodic variation in the amplitude of the resultant wave. This produces a characteristic "pulsing" sound in acoustics, often used by musicians to tune instruments. Beats demonstrate how superposition applies to waves with nearly identical frequencies and provide a practical method for measuring small frequency differences.

---

## Mathematical Description of Beats

The formation of beats can be understood through a careful mathematical analysis of wave superposition. Let's explore how two waves of slightly different frequencies combine to create this fascinating phenomenon.

### Superposition of Two Sound Waves

Consider two sound waves propagating through the same medium with equal amplitudes $A$ but slightly different frequencies $f_1$ and $f_2$. These waves can be described mathematically as:

$$
y_1(t) = A \cos(2\pi f_1 t)
$$

$$
y_2(t) = A \cos(2\pi f_2 t)
$$

According to the principle of superposition, these waves combine additively to produce a resultant wave:

$$
\begin{aligned}
y(t) &= y_1(t) + y_2(t) \\
&= A \cos(2\pi f_1 t) + A \cos(2\pi f_2 t)
\end{aligned}
$$

### Mathematical Transformation

This expression can be simplified using a fundamental trigonometric identity for the sum of cosines:

$$
\cos\alpha + \cos\beta = 2 \cos\left(\frac{\alpha - \beta}{2}\right) \cos\left(\frac{\alpha + \beta}{2}\right)
$$

Let's make the substitutions:
- $\alpha = 2\pi f_1 t$
- $\beta = 2\pi f_2 t$

Applying this identity to our superposition equation yields:

$$
y(t) = 2A \cos\left(2\pi \frac{f_1 - f_2}{2} t\right) \cos\left(2\pi \frac{f_1 + f_2}{2} t\right)
$$

### Understanding the Beat Pattern

This transformed equation reveals the two distinct components of the beat pattern:

1. The Carrier Wave:
   $$
   f_{\text{carrier}} = \frac{f_1 + f_2}{2}
   $$
   This represents the average frequency of the original waves and determines the primary pitch we hear.

2. The Amplitude Modulation:
   $$
   f_{\text{envelope}} = \left|\frac{f_1 - f_2}{2}\right|
   $$
   This creates the characteristic "waxing and waning" of the sound intensity.

The perceived beat frequency, which is what we actually hear as the pulsing rhythm, is twice the envelope frequency:

$$
\boxed{f_{\text{beat}} = |f_1 - f_2|}
$$

This mathematical derivation explains why the beat frequency equals the absolute difference between the original frequencies. For example, if two tuning forks differ by 4 Hz, we will hear exactly 4 beats per second, regardless of the actual frequencies of the forks.

The amplitude of the combined wave varies sinusoidally with time, reaching:
- Maximum value of $2A$ when the waves are in phase
- Minimum value of 0 when they are completely out of phase

This mathematical framework not only explains the beat phenomenon but also provides a practical tool for musicians and technicians in tuning instruments and measuring small frequency differences.

---

## Mathematical Analysis

### Basic Beat Formation

Consider two waves of equal amplitude $A$ but slightly different angular frequencies $\omega_1$ and $\omega_2$:

$$
y_1(x,t) = A\cos(\omega_1 t)
$$
$$
y_2(x,t) = A\cos(\omega_2 t)
$$

Using the principle of superposition, the resultant wave is:

$$
\begin{aligned}
y(x,t) &= y_1(x,t) + y_2(x,t) \\
&= A[\cos(\omega_1 t) + \cos(\omega_2 t)]
\end{aligned}
$$

Applying the trigonometric identity for the sum of cosines:

$$
y(x,t) = 2A\cos\left(\frac{\omega_1 - \omega_2}{2}t\right)\cos\left(\frac{\omega_1 + \omega_2}{2}t\right)
$$

### Interpretation of the Beat Equation

The mathematical expression for beats explains both the physical phenomenon and our auditory perception of it. When we examine the equation:

$$
y(t) = 2A\cos\left(\frac{\omega_1 - \omega_2}{2}t\right)\cos\left(\frac{\omega_1 + \omega_2}{2}t\right)
$$

we discover that the wave motion separates into two distinct oscillatory components, each playing a crucial role in the beat phenomenon.

The first component involves the average angular frequency:

$$
\omega_{avg} = \frac{\omega_1 + \omega_2}{2}
$$

This term represents the rapid oscillation that determines the primary frequency we hear. It's the arithmetic mean of the original frequencies, creating what musicians call the "carrier" tone. For instance, if we combine waves of 442 Hz and 438 Hz, the carrier frequency of 440 Hz becomes the predominant pitch reaching our ears, corresponding to the musical note A4.

The second component introduces a slower modulation:

$$
\omega_{beat} = \frac{\omega_1 - \omega_2}{2}
$$

This term creates the characteristic pulsing effect of beats. The modulation frequency depends on the difference between the original frequencies, explaining why the beat pattern slows down as the frequencies approach each other during tuning.

Converting from angular frequencies to ordinary frequencies measured in Hertz, we find that the perceived beat frequency is:

$$
\boxed{f_{\text{beat}} = |f_1 - f_2|}
$$

The absolute value indicates that beats occur regardless of which frequency is higher, and the linear relationship means that every 1 Hz difference in frequency produces exactly one beat per second. Musicians exploit this direct correspondence when tuning instruments: as they adjust the pitch, the slowing of the beat pattern provides immediate feedback about how close they are to perfect unison.

The temporal evolution of the wave creates regions of constructive and destructive interference that repeat with the beat period:

$$
T_{beat} = \frac{1}{|f_1 - f_2|}
$$

During each beat period, the combined wave amplitude smoothly varies from its maximum value of $2A$, where the waves align perfectly in phase, to zero, where they cancel completely. This cyclical pattern of reinforcement and cancellation produces the distinctive "waxing and waning" effect that gives beats their name.

In practice, this mathematical framework enables precise frequency measurements and provides a powerful tool for understanding complex wave interactions in acoustics, electronics, and quantum systems. The beat phenomenon demonstrates how simple sinusoidal waves can combine to create rich, temporally varying patterns that bridge the gap between mathematical theory and practical applications in music and science.

### Maximum and Minimum Values

1. Constructive Interference (Maximum Amplitude):
   $$
   A_{max} = 2A \quad \text{when} \quad \frac{(\omega_1 - \omega_2)t}{2} = n\pi
   $$

2. Destructive Interference (Minimum Amplitude):
   $$
   A_{min} = 0 \quad \text{when} \quad \frac{(\omega_1 - \omega_2)t}{2} = (n + \frac{1}{2})\pi
   $$

where $n = 0, 1, 2, ...$

## Applications in Music and Acoustics

### Musical Instrument Tuning

Musicians use beats for precise tuning. When two notes are slightly out of tune, the beat frequency $f_{beat}$ provides a direct measure of their frequency difference:

$$
f_{beat} = |f_{reference} - f_{instrument}|
$$

Perfect tuning is achieved when the beat frequency approaches zero.

### Complex Beat Patterns

In real musical instruments, multiple frequency components create complex beat patterns. For three frequencies $f_1$, $f_2$, and $f_3$, possible beat frequencies include:

$$
f_{beat,12} = |f_1 - f_2|
$$
$$
f_{beat,23} = |f_2 - f_3|
$$
$$
f_{beat,13} = |f_1 - f_3|
$$

## Practical Examples and Problems

### Example 1
Two tuning forks vibrate at frequencies of 442 Hz and 438 Hz. Calculate:

a) The beat frequency:
$$
f_{beat} = |442 - 438| = 4 \text{ Hz}
$$

b) The time between successive maxima:
$$
T_{beat} = \frac{1}{f_{beat}} = \frac{1}{4} = 0.25 \text{ seconds}
$$

### Example 2
A string vibrating at 330 Hz is being tuned to a standard A (440 Hz). If 2 beats per second are heard:

a) The string's frequency could be either:
$$
f_{string} = 440 \pm 2 \text{ Hz}
$$
$$
f_{string} = 438 \text{ Hz or } 442 \text{ Hz}
$$

## Experimental Methods

### Measuring Beat Frequencies

1. Time Measurement Method:
   $$
   f_{beat} = \frac{N}{t}
   $$
   where $N$ is the number of amplitude maxima counted in time $t$.

2. Digital Analysis:
   The frequency spectrum shows sidebands separated by the beat frequency:
   $$
   f_{sidebands} = f_{carrier} \pm f_{beat}
   $$

This understanding of beats provides a powerful tool for precise frequency measurements and musical instrument tuning, demonstrating the practical application of wave interference principles.

---

## Applications of Beats

### Tuning Musical Instruments
Musicians use beats to tune instruments by adjusting the frequency of a note until no beats are heard (i.e., \( f_1 = f_2 \)). For example:  
- A piano tuner listens for beats between a tuning fork and a piano string.  
- A violinist adjusts string tension to eliminate beats when playing alongside another instrument.  

### Doppler Radar and Sonar
Beats are used in Doppler radar and sonar systems to measure the velocity of moving objects by analyzing the frequency shift of reflected waves.  

### Radio Communication
In amplitude modulation (AM) radio, beats are used to encode information onto carrier waves.  

---

## Practical Questions and Answers

Let's explore some common scenarios involving beats through practical examples and their solutions.

### Question 1: Tuning a Guitar String

**Problem**: A guitar string vibrating at 329.6 Hz (the standard frequency for E4) is being tuned. If 3 beats per second are heard when played with a reference tone, what are the possible frequencies of the string?

**Solution**: 
When beats are heard, the string's frequency ($f_s$) differs from the reference frequency ($f_r$) by the beat frequency ($f_b$):

$$
|f_s - 329.6| = 3 \text{ Hz}
$$

Therefore, the string could be vibrating at either:

$$
f_s = 329.6 \pm 3 \text{ Hz}
$$

$$
f_s = 326.6 \text{ Hz or } 332.6 \text{ Hz}
$$

### Question 2: Time Between Amplitude Maxima

**Problem**: Two tuning forks produce frequencies of 512 Hz and 515 Hz. Calculate:
a) The beat frequency
b) The time between successive amplitude maxima
c) The carrier frequency

**Solution**:

a) Beat frequency:
$$
f_{beat} = |f_1 - f_2| = |512 - 515| = 3 \text{ Hz}
$$

b) Time between maxima:
$$
T_{beat} = \frac{1}{f_{beat}} = \frac{1}{3} = 0.333... \text{ seconds}
$$

c) Carrier frequency:
$$
f_{carrier} = \frac{f_1 + f_2}{2} = \frac{512 + 515}{2} = 513.5 \text{ Hz}
$$

### Question 3: Complex Beat Patterns

**Problem**: Three tuning forks have frequencies of 440 Hz, 442 Hz, and 445 Hz. What beat frequencies will be heard?

**Solution**:
The beat frequencies between each pair are:

$$
f_{beat,12} = |f_1 - f_2| = |440 - 442| = 2 \text{ Hz}
$$

$$
f_{beat,23} = |f_2 - f_3| = |442 - 445| = 3 \text{ Hz}
$$

$$
f_{beat,13} = |f_1 - f_3| = |440 - 445| = 5 \text{ Hz}
$$

### Question 4: Energy in Beat Patterns

**Problem**: If two interfering waves each have amplitude $A$, calculate:
a) The maximum combined amplitude
b) The maximum intensity relative to a single wave
c) The time-averaged intensity

**Solution**:

a) Maximum amplitude (constructive interference):
$$
A_{max} = 2A
$$

b) Maximum intensity ratio:
$$
\frac{I_{max}}{I_0} = \frac{(2A)^2}{A^2} = 4
$$

c) Time-averaged intensity:
$$
\langle I \rangle = 2I_0 = 2(\frac{1}{2}\rho v\omega^2A^2)
$$

where $\rho$ is the medium density, $v$ is wave velocity, and $\omega$ is angular frequency.

### Question 5: Doppler Effect and Beats

**Problem**: A source emitting a 1000 Hz tone moves at 10 m/s toward a stationary observer. If a stationary reference source emits 1000 Hz, what is the beat frequency heard by the observer? (Speed of sound = 343 m/s)

**Solution**:
First, calculate the Doppler-shifted frequency:

$$
f_{observed} = f_{source}\left(\frac{v_{sound}}{v_{sound} - v_{source}}\right)
$$

$$
f_{observed} = 1000\left(\frac{343}{343 - 10}\right) = 1030 \text{ Hz}
$$

The beat frequency is then:

$$
f_{beat} = |f_{observed} - f_{reference}| = |1030 - 1000| = 30 \text{ Hz}
$$

### Question 6: Multiple Sound Sources

**Problem**: Three speakers emit pure tones of 200 Hz, 203 Hz, and 205 Hz. Calculate:
a) All possible beat frequencies
b) The fundamental beat period
c) The average frequency heard

**Solution**:

a) Beat frequencies between each pair:
$$
f_{beat,12} = |f_1 - f_2| = |200 - 203| = 3 \text{ Hz}
$$
$$
f_{beat,23} = |f_2 - f_3| = |203 - 205| = 2 \text{ Hz}
$$
$$
f_{beat,13} = |f_1 - f_3| = |200 - 205| = 5 \text{ Hz}
$$

b) Fundamental beat period (time for all waves to return to initial phase):
$$
T_{fundamental} = \frac{1}{\text{GCD}(f_{beat,12}, f_{beat,23}, f_{beat,13})} = \frac{1}{\text{GCD}(3,2,5)} = 1 \text{ second}
$$

c) Average frequency:
$$
f_{avg} = \frac{f_1 + f_2 + f_3}{3} = \frac{200 + 203 + 205}{3} = 202.67 \text{ Hz}
$$

### Question 7: Standing Wave Beats

**Problem**: A string fixed at both ends has a fundamental frequency of 100 Hz. If a forcing frequency creates beats with the second harmonic, and the beat frequency is 4 Hz, what are the possible forcing frequencies?

**Solution**:
First, calculate the second harmonic frequency:
$$
f_2 = 2f_1 = 2(100) = 200 \text{ Hz}
$$

The forcing frequency $f_f$ satisfies:
$$
|f_f - 200| = 4 \text{ Hz}
$$

Therefore:
$$
f_f = 200 \pm 4 = 196 \text{ Hz or } 204 \text{ Hz}
$$

### Question 8: Intensity Modulation

**Problem**: Two sound waves of equal amplitude $A = 2 \text{ Pa}$ and frequencies 440 Hz and 444 Hz interfere. Calculate:
a) The beat frequency
b) The maximum sound pressure amplitude
c) The intensity variation with time, given air density $\rho = 1.2 \text{ kg/m}^3$ and speed of sound $v = 343 \text{ m/s}$

**Solution**:

a) Beat frequency:
$$
f_{beat} = |f_1 - f_2| = |440 - 444| = 4 \text{ Hz}
$$

b) Maximum pressure amplitude:
$$
A_{max} = 2A = 4 \text{ Pa}
$$

c) Time-varying intensity:
$$
I(t) = \frac{A_{max}^2}{2\rho v}\cos^2(2\pi f_{beat}t) = \frac{16}{2(1.2)(343)}\cos^2(8\pi t) \text{ W/m}^2
$$

### Question 9: Resonance and Beats

**Problem**: An organ pipe resonates at 256 Hz at 20°C. If the temperature increases to 30°C, what beat frequency will be heard when compared with a 256 Hz tuning fork? (Speed of sound increases by 0.6 m/s per °C)

**Solution**:
Calculate the new resonant frequency:
$$
f_{new} = f_{old}\frac{v_{new}}{v_{old}} = 256\frac{343 + (10)(0.6)}{343} = 256(1.017) = 260.4 \text{ Hz}
$$

Beat frequency:
$$
f_{beat} = |f_{new} - f_{fork}| = |260.4 - 256| = 4.4 \text{ Hz}
$$

### Question 10: Phase Relationships in Beats

**Problem**: Two waves of equal amplitude create beats. At what fraction of the beat period are they:
a) In phase
b) 90° out of phase
c) Completely out of phase

**Solution**:

a) In phase (maximum amplitude) occurs at:
$$
t = n\frac{T_{beat}}{2}, \quad n = 0,1,2,...
$$

b) 90° phase difference occurs at:
$$
t = (2n+1)\frac{T_{beat}}{8}, \quad n = 0,1,2,...
$$

c) Out of phase (minimum amplitude) occurs at:
$$
t = (2n+1)\frac{T_{beat}}{4}, \quad n = 0,1,2,...
$$

where $T_{beat}$ is the beat period:
$$
T_{beat} = \frac{1}{f_{beat}} = \frac{1}{|f_1 - f_2|}
$$

These additional examples demonstrate the wide range of applications of beat phenomena in acoustics, music, and wave physics, from basic frequency measurements to complex resonance effects and phase relationships.

## Key Takeaways
- **Beats** arise from the interference of two waves with slightly different frequencies.  
- **Beat Frequency**: $\boxed{f_{\text{beat}} = |f_1 - f_2|}$.  
- **Applications**: Tuning musical instruments, Doppler measurements, and AM radio.  
- **Audible Beats**: Perceived as periodic loudness variations at the beat frequency.  

![Beat Formation](/content/waves-and-oscillations/superposition-interference/images/beats-formation.svg)

### Mathematical Description

Consider two waves of equal amplitude but slightly different frequencies $f_1$ and $f_2$:

Wave 1: $y_1(t) = A\cos(2\pi f_1t)$
Wave 2: $y_2(t) = A\cos(2\pi f_2t)$

Their superposition results in:

$y(t) = y_1(t) + y_2(t) = 2A\cos(2\pi f_{avg}t)\cos(2\pi f_{beat}t)$

where:
- $f_{avg} = \frac{f_1 + f_2}{2}$ (average frequency)
- $f_{beat} = \frac{|f_1 - f_2|}{2}$ (beat frequency)

### Amplitude Variation

The amplitude of the resultant wave varies with time:

![Beat Amplitude](/content/waves-and-oscillations/superposition-interference/images/beats-amplitude.svg)

The amplitude varies between:
- Maximum: 2A (constructive interference)
- Minimum: 0 (destructive interference)

### Applications in Music

Beats have important applications in music and instrument tuning:

![Beat Applications](/content/waves-and-oscillations/superposition-interference/images/beats-applications.svg)

1. **Instrument Tuning**: Musicians use beats to tune instruments by comparing:
   - A reference tone (e.g., tuning fork at 440 Hz)
   - The instrument's tone
   - The beat frequency indicates how far out of tune the instrument is

2. **Piano Tuning**: Professional piano tuners use beats to:
   - Tune octaves
   - Adjust intervals
   - Create equal temperament