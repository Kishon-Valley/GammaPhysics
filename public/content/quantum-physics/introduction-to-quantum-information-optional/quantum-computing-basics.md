## Quantum Computing Basics

### Quantum Bits and Quantum States

When we examine the world at the quantum scale, the rules of information processing change. Classical computers work with bits—binary digits that are either 0 or 1. Quantum computers, however, operate with quantum bits or qubits that exist in a more nuanced state. A qubit can be in a superposition, mathematically described as:

$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$

Here, $\alpha$ and $\beta$ are complex numbers called probability amplitudes, with $|\alpha|^2 + |\beta|^2 = 1$ ensuring proper normalization. This mathematical structure allows a qubit to encode more information than a classical bit. When measured, quantum mechanics dictates that the superposition collapses—yielding state $|0\rangle$ with probability $|\alpha|^2$ or state $|1\rangle$ with probability $|\beta|^2$.

The power of quantum computing becomes apparent when we combine multiple qubits. Two interacting qubits can form entangled states where their properties become correlated in ways impossible for classical bits. This quantum connection means we cannot describe each qubit independently. Mathematically, an $n$-qubit system requires $2^n$ complex numbers to specify completely, compared to just $n$ values for classical bits. This exponential relationship creates the potential computational advantage that researchers seek to harness.

### Quantum Gates and Circuits

To process quantum information, we need quantum gates—the building blocks of quantum computation. Unlike classical logic gates that perform deterministic operations, quantum gates are unitary transformations that preserve the normalization of quantum states.

The most basic quantum operations involve single-qubit gates. The Pauli gates (X, Y, and Z) perform specific rotations in the qubit's state space:

- The X gate acts as a quantum NOT operation, flipping $|0\rangle$ to $|1\rangle$ and vice versa: $X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- The Z gate preserves $|0\rangle$ but flips the sign of $|1\rangle$: $Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- The Y gate combines aspects of both X and Z: $Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$

Perhaps the most distinctive quantum gate is the Hadamard gate, which creates equal superpositions:

$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

When applied to $|0\rangle$, it produces $\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$—a state with equal probability of measuring 0 or 1.

Other important single-qubit operations include phase gates:
- The S gate introduces a π/2 phase shift: $S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$
- The T gate applies a more precise π/4 phase: $T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}$

To create quantum algorithms, we need interactions between qubits. The controlled-NOT (CNOT) gate serves as the quantum equivalent of the classical XOR operation:

$$\text{CNOT} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix}$$

This gate flips the second qubit (target) only when the first qubit (control) is in state $|1\rangle$. The CNOT gate enables entanglement creation—a capability with no classical analog.

By combining these quantum gates in specific sequences, we create quantum circuits that implement quantum algorithms. These circuits manipulate quantum information through a series of operations before measurement converts quantum probabilities into classical results.

### Universal Quantum Computing

A practical question arises: with infinitely many possible unitary operations, how many different quantum gates do we need to implement any quantum algorithm? The answer comes from the concept of universal gate sets.

A set of quantum gates is universal if it can approximate any unitary operation to arbitrary precision. Remarkably, we only need a small collection of gates for universal quantum computation. One such set includes:
- The Hadamard gate (H)
- The phase gate (S)
- The CNOT gate
- The π/8 gate (T)

The Solovay-Kitaev theorem provides the mathematical justification, showing that any single-qubit unitary operation can be approximated using a sequence from a universal set. The sequence length scales logarithmically with the desired precision, making efficient approximation possible.

This universality principle parallels the situation in classical computing, where NAND gates alone can implement any Boolean function. The existence of small universal gate sets makes quantum computing architectures more feasible to implement physically.

### Quantum Algorithms

The true value of quantum computing emerges in quantum algorithms that solve specific problems more efficiently than their classical counterparts. These algorithms leverage quantum superposition, entanglement, and interference to achieve computational advantages.

The Deutsch-Jozsa algorithm demonstrates a simple but illustrative quantum speedup. Consider a black-box function that maps n-bit inputs to a single output bit. The function is either constant (same output for all inputs) or balanced (outputs 0 for exactly half the inputs and 1 for the other half). Classically, determining which type requires checking up to $2^{n-1}+1$ inputs in the worst case. The quantum approach solves this with just one function evaluation:

1. Initialize $n+1$ qubits to $|0\rangle^{\otimes n}|1\rangle$
2. Apply Hadamard gates to create superpositions
3. Query the function oracle once
4. Apply Hadamard gates again
5. Measure the first $n$ qubits

The measurement result immediately reveals whether the function is constant (all zeros) or balanced (any non-zero result). This exponential speedup, while for a somewhat artificial problem, illustrates the power of quantum parallelism.

Grover's search algorithm addresses the more practical problem of searching an unsorted database. Classically, finding a specific item among N unsorted entries requires checking an average of N/2 items. Grover's quantum approach achieves this with approximately $\sqrt{N}$ operations:

1. Create a superposition of all possible states
2. Repeat approximately $\sqrt{N}$ times:
   - Mark the target state using the oracle
   - Amplify the marked state's amplitude using the diffusion operator
3. Measure to obtain the target with high probability

This quadratic speedup becomes significant for large databases and applies to many search-based problems.

Shor's factoring algorithm represents perhaps the most consequential quantum algorithm discovered so far. Factoring large integers classically requires exponential time with the best-known algorithms, which is why RSA encryption remains secure. Shor's algorithm factors integers in polynomial time by:

1. Reducing factoring to finding the period of a modular exponential function
2. Using quantum Fourier transform to find this period efficiently
3. Using the period to compute factors with high probability

The algorithm's ability to break widely-used cryptographic systems has spurred significant investment in quantum computing research and post-quantum cryptography.

### Quantum Error Correction

The quantum states that enable computational advantages are also extremely fragile. Environmental interactions cause decoherence—the loss of quantum information to the surrounding environment. Additionally, imperfect control leads to gate errors. These issues present a significant challenge: how do we maintain quantum information long enough to complete useful computations?

Quantum error correction provides the answer by encoding quantum information redundantly. The simplest example is the three-qubit bit-flip code:
- Logical $|0_L\rangle$ is encoded as physical $|000\rangle$
- Logical $|1_L\rangle$ is encoded as physical $|111\rangle$

If a single bit flips due to an error (e.g., $|000\rangle$ becomes $|010\rangle$), we can detect and correct it through syndrome measurements that identify the error location without collapsing the quantum state. This approach overcomes a seemingly impossible obstacle: the no-cloning theorem prohibits making exact copies of unknown quantum states, yet we can still protect quantum information.

More sophisticated codes protect against various error types:
- Shor's nine-qubit code corrects arbitrary single-qubit errors
- The Steane code uses seven qubits with a structure based on classical error-correcting codes
- Surface codes provide topological protection and better scaling properties

For quantum error correction to succeed, the physical error rate must fall below a threshold value—typically around 1% for surface codes. This threshold theorem gives hope that fault-tolerant quantum computation is achievable despite imperfect components.

### Physical Implementations

The quest to build quantum computers has led researchers to explore various physical systems as qubit candidates. Each approach offers distinct advantages and faces unique challenges.

Superconducting circuits represent the most advanced current technology. These systems use Josephson junctions—two superconductors separated by a thin insulating barrier—to create anharmonic oscillators with discrete energy levels. The two lowest energy states serve as the computational basis. Operating at temperatures near absolute zero (millikelvin), these qubits are controlled with microwave pulses. Companies like IBM, Google, and Rigetti have built processors with dozens of superconducting qubits, demonstrating basic quantum algorithms and error correction protocols.

Trapped ion systems offer exceptional coherence properties. Here, individual ions (typically from alkaline earth metals) are confined in electromagnetic fields. Their electronic or hyperfine states represent qubit states, manipulated by precisely tuned laser pulses. Ions interact through their shared motional modes, enabling multi-qubit operations. While trapped ions boast high-fidelity operations, scaling to many qubits presents engineering challenges.

Photonic approaches use light itself as the quantum information carrier. Properties like polarization, path, or time-bin encoding represent qubit states. Photons rarely interact with their environment, making them excellent for maintaining coherence and ideal for quantum communication. However, creating deterministic interactions between photons—necessary for two-qubit gates—remains technically difficult.

Spin-based qubits encode information in electron or nuclear spins within various materials. Semiconductor quantum dots spatially confine electrons, while nitrogen-vacancy centers in diamond create atomic-scale defects with accessible spin states. These approaches leverage existing semiconductor fabrication techniques but require precise control at the atomic scale.

Each implementation continues to advance, with hybrid approaches emerging that combine the strengths of different systems.

### Quantum Computational Complexity

As quantum computers develop, theoretical computer scientists study the types of problems these devices can efficiently solve. Quantum computational complexity theory classifies problems based on the resources quantum algorithms require.

The complexity class BQP (Bounded-error Quantum Polynomial time) contains problems solvable by a quantum computer with bounded error probability in polynomial time. This includes integer factorization (via Shor's algorithm) and database search (via Grover's algorithm).

QMA (Quantum Merlin-Arthur) encompasses problems verifiable by a quantum computer given a quantum proof, analogous to the classical complexity class NP. QSZK (Quantum Statistical Zero Knowledge) contains problems with quantum zero-knowledge proof systems.

The relationship between quantum and classical complexity classes remains an active research area. BQP appears to contain problems outside P (efficiently solvable classically) but within PSPACE (solvable with polynomial space). Understanding these boundaries helps identify which problems offer genuine quantum advantages.

### Current State and Challenges

Today's quantum computers operate in what researchers call the NISQ (Noisy Intermediate-Scale Quantum) era. Current systems typically feature:
- 50-100+ physical qubits
- Coherence times measured in microseconds to milliseconds
- Gate error rates between 0.1-1%
- Limited or no error correction

These constraints restrict applications to algorithms that tolerate noise and require few operations, such as variational quantum eigensolvers for chemistry problems and quantum approximate optimization algorithms.

Several challenges must be overcome to reach practical quantum advantage:
- Scaling to more qubits while maintaining or improving coherence
- Reducing gate errors below fault-tolerance thresholds
- Implementing practical quantum error correction codes
- Creating efficient interfaces between classical and quantum processing
- Identifying algorithms with clear practical advantages on near-term devices

Despite these challenges, quantum computing continues to advance rapidly. The field has progressed from theoretical proposals to working prototypes in just a few decades, suggesting that more capable quantum computers lie on the horizon.


## Practice Problems

### Problem 1: Quantum State Manipulation

**Question:** A qubit is in state $|\psi\rangle = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle$. Calculate the probabilities of measuring 0 and 1. Then determine the state after applying a Hadamard gate followed by a Z gate.

**Solution:**

The measurement probabilities are:
- $P(0) = |\frac{1}{\sqrt{3}}|^2 = \frac{1}{3}$
- $P(1) = |\sqrt{\frac{2}{3}}|^2 = \frac{2}{3}$

Applying the Hadamard gate:
$H|\psi\rangle = H(\frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle)$
$= \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$
$= \frac{1}{\sqrt{6}}(|0\rangle + |1\rangle) + \frac{\sqrt{2}}{\sqrt{6}}(|0\rangle - |1\rangle)$
$= \frac{1 + \sqrt{2}}{\sqrt{6}}|0\rangle + \frac{1 - \sqrt{2}}{\sqrt{6}}|1\rangle$

Applying the Z gate:
$Z(H|\psi\rangle) = \frac{1 + \sqrt{2}}{\sqrt{6}}|0\rangle - \frac{1 - \sqrt{2}}{\sqrt{6}}|1\rangle$

This is the final state after both operations.

### Problem 2: Quantum Circuit Analysis

**Question:** Consider a two-qubit circuit where both qubits start in state $|0\rangle$. A Hadamard gate is applied to the first qubit, followed by a CNOT gate with the first qubit as control and the second as target. What is the final state of the system? Is this state entangled?

**Solution:**

Initial state: $|00\rangle$

After Hadamard on first qubit:
$H \otimes I |00\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) \otimes |0\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |10\rangle)$

After CNOT:
$CNOT(\frac{1}{\sqrt{2}}(|00\rangle + |10\rangle)) = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$

This is the Bell state $|\Phi^+\rangle$. To determine if it's entangled, we check if it can be written as a tensor product of individual qubit states:

If $|\Phi^+\rangle = (a|0\rangle + b|1\rangle) \otimes (c|0\rangle + d|1\rangle)$, then:
$|\Phi^+\rangle = ac|00\rangle + ad|01\rangle + bc|10\rangle + bd|11\rangle$

Comparing with $\frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$, we need:
- $ac = \frac{1}{\sqrt{2}}$
- $ad = 0$
- $bc = 0$
- $bd = \frac{1}{\sqrt{2}}$

From $ad = 0$ and $bd = \frac{1}{\sqrt{2}}$, either $a = 0$ or $d = 0$. If $a = 0$, then $ac = 0 \neq \frac{1}{\sqrt{2}}$. If $d = 0$, then $bd = 0 \neq \frac{1}{\sqrt{2}}$.

Therefore, the state cannot be written as a tensor product and is entangled.

### Problem 3: Deutsch-Jozsa Algorithm

**Question:** Consider a one-bit function $f(x)$ that maps $\{0,1\}$ to $\{0,1\}$. There are four possible functions: two constant and two balanced. Trace through the Deutsch algorithm to determine whether $f(x) = x$ is constant or balanced.

**Solution:**

For $f(x) = x$, we have $f(0) = 0$ and $f(1) = 1$, making it a balanced function.

The Deutsch algorithm uses two qubits and proceeds as follows:

1. Initialize the state to $|01\rangle$
2. Apply Hadamard gates to both qubits:
   $H \otimes H |01\rangle = \frac{1}{2}(|0\rangle + |1\rangle) \otimes (|0\rangle - |1\rangle) = \frac{1}{2}(|00\rangle - |01\rangle + |10\rangle - |11\rangle)$

3. Apply the function oracle $U_f$, which performs $|x\rangle|y\rangle \rightarrow |x\rangle|y \oplus f(x)\rangle$:
   For $f(x) = x$:
   - $|0\rangle|y\rangle \rightarrow |0\rangle|y \oplus 0\rangle = |0\rangle|y\rangle$
   - $|1\rangle|y\rangle \rightarrow |1\rangle|y \oplus 1\rangle = |1\rangle|y \oplus 1\rangle$

   Applying to our state:
   $U_f(\frac{1}{2}(|00\rangle - |01\rangle + |10\rangle - |11\rangle))$
   $= \frac{1}{2}(|00\rangle - |01\rangle + |11\rangle - |10\rangle)$
   $= \frac{1}{2}(|0\rangle \otimes (|0\rangle - |1\rangle) - |1\rangle \otimes (|0\rangle - |1\rangle))$
   $= \frac{1}{2}((|0\rangle - |1\rangle) \otimes (|0\rangle - |1\rangle))$

4. Apply Hadamard to the first qubit:
   $H \otimes I (\frac{1}{2}((|0\rangle - |1\rangle) \otimes (|0\rangle - |1\rangle)))$
   $= \frac{1}{2}(H(|0\rangle - |1\rangle) \otimes (|0\rangle - |1\rangle))$
   $= \frac{1}{2}((\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) - \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)) \otimes (|0\rangle - |1\rangle))$
   $= \frac{1}{2}(\frac{1}{\sqrt{2}}(2|1\rangle) \otimes (|0\rangle - |1\rangle))$
   $= \frac{1}{\sqrt{2}}|1\rangle \otimes \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$
   $= \frac{1}{2}(|10\rangle - |11\rangle)$

5. Measure the first qubit. The probability of measuring $|1\rangle$ is 1.

Since the first qubit is definitely in state $|1\rangle$, the function is balanced, which matches our initial determination that $f(x) = x$ is balanced.

### Problem 4: Quantum Fourier Transform

**Question:** Apply the Quantum Fourier Transform to the 2-qubit state $|\psi\rangle = |01\rangle$ and verify the result.

**Solution:**

The QFT on an n-qubit state $|j\rangle$ is defined as:

$$\text{QFT}|j\rangle = \frac{1}{\sqrt{2^n}}\sum_{k=0}^{2^n-1}e^{2\pi i jk/2^n}|k\rangle$$

For $|01\rangle$ (j=1):
$$\text{QFT}|01\rangle = \frac{1}{2}\sum_{k=0}^{3}e^{2\pi i \cdot 1 \cdot k/4}|k\rangle$$

Computing each term:
- k=0: $e^{2\pi i \cdot 0/4} = 1$
- k=1: $e^{2\pi i \cdot 1/4} = e^{\pi i/2} = i$
- k=2: $e^{2\pi i \cdot 2/4} = e^{\pi i} = -1$
- k=3: $e^{2\pi i \cdot 3/4} = e^{3\pi i/2} = -i$

Therefore:
$$\text{QFT}|01\rangle = \frac{1}{2}(|00\rangle + i|01\rangle - |10\rangle - i|11\rangle)$$

This can be verified by applying the QFT circuit: Hadamard gates on both qubits, followed by a controlled-phase gate with phase $\pi/2$.

### Problem 5: Quantum Teleportation

**Question:** In quantum teleportation, Alice prepares the state $|\psi\rangle = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle$ and wants to teleport it to Bob. After performing the protocol, Alice measures $|00\rangle$. What is Bob's resulting state, and what operation (if any) must he apply to recover $|\psi\rangle$?

**Solution:**

In quantum teleportation, Alice and Bob share a Bell state $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$.

The initial three-qubit state is:
$$|\Psi\rangle = \left(\frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle\right) \otimes \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$$

After Alice applies CNOT and Hadamard gates, the state becomes:
$$|\Psi'\rangle = \frac{1}{2\sqrt{3}}|00\rangle\left(|0\rangle + \sqrt{2}|1\rangle\right) + \frac{1}{2\sqrt{3}}|01\rangle\left(|1\rangle + \sqrt{2}|0\rangle\right) + \frac{1}{2\sqrt{3}}|10\rangle\left(|0\rangle - \sqrt{2}|1\rangle\right) + \frac{1}{2\sqrt{3}}|11\rangle\left(|1\rangle - \sqrt{2}|0\rangle\right)$$

When Alice measures $|00\rangle$, Bob's qubit collapses to:
$$|\phi_B\rangle = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle = |\psi\rangle$$

Since Bob's state is already $|\psi\rangle$, no correction operation is needed.

### Problem 6: Quantum Error Correction

**Question:** A logical qubit is encoded using the three-qubit phase-flip code: $|0_L\rangle = \frac{1}{2}(|+\rangle + |-\rangle)^{\otimes 3} = \frac{1}{2}(|+++\rangle + |++-\rangle + |+-+\rangle + |+--\rangle)$ and $|1_L\rangle = \frac{1}{2}(|+\rangle - |-\rangle)^{\otimes 3} = \frac{1}{2}(|+++\rangle - |++-\rangle - |+-+\rangle + |+--\rangle)$. If a phase-flip error occurs on the second qubit, describe how to detect and correct this error.

**Solution:**

The phase-flip code works in the X-basis (|+⟩, |-⟩) rather than the Z-basis (|0⟩, |1⟩).

For a phase-flip error on the second qubit, the error operator is Z₂, which flips |+⟩ to |-⟩ and vice versa on the second qubit.

To detect this error:
1. Apply Hadamard gates to convert from X-basis to Z-basis
2. Perform parity checks between qubits 1 & 2 and qubits 2 & 3
3. Measure the syndrome qubits

After applying Hadamard gates, the code becomes equivalent to the bit-flip code in the Z-basis. The syndrome measurement will yield (1,1), indicating an error on the second qubit.

To correct the error:
1. Apply a Z gate to the second qubit
2. Apply Hadamard gates to convert back to the X-basis

This restores the original encoded state, protecting against a single phase-flip error.

### Problem 7: Quantum Circuit Equivalence

**Question:** Show that the controlled-Z gate can be implemented using a Hadamard gate on the target qubit, followed by a CNOT gate, followed by another Hadamard gate on the target qubit.

**Solution:**

We need to prove that H₂ · CNOT · H₂ = CZ, where H₂ indicates a Hadamard gate on the second qubit.

The controlled-Z gate in the computational basis is:
$$CZ = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}$$

The Hadamard gate is:
$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

The CNOT gate is:
$$CNOT = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix}$$

Applying H₂ to the basis states:
- H₂|00⟩ = |0⟩ ⊗ H|0⟩ = |0⟩ ⊗ (|0⟩+|1⟩)/√2 = (|00⟩+|01⟩)/√2
- H₂|01⟩ = |0⟩ ⊗ H|1⟩ = |0⟩ ⊗ (|0⟩-|1⟩)/√2 = (|00⟩-|01⟩)/√2
- H₂|10⟩ = |1⟩ ⊗ H|0⟩ = |1⟩ ⊗ (|0⟩+|1⟩)/√2 = (|10⟩+|11⟩)/√2
- H₂|11⟩ = |1⟩ ⊗ H|1⟩ = |1⟩ ⊗ (|0⟩-|1⟩)/√2 = (|10⟩-|11⟩)/√2

After applying CNOT:
- CNOT·(|00⟩+|01⟩)/√2 = (|00⟩+|01⟩)/√2
- CNOT·(|00⟩-|01⟩)/√2 = (|00⟩-|01⟩)/√2
- CNOT·(|10⟩+|11⟩)/√2 = (|11⟩+|10⟩)/√2
- CNOT·(|10⟩-|11⟩)/√2 = (|11⟩-|10⟩)/√2

Finally, applying H₂ again:
- H₂·(|00⟩+|01⟩)/√2 = |00⟩
- H₂·(|00⟩-|01⟩)/√2 = |01⟩
- H₂·(|11⟩+|10⟩)/√2 = |10⟩
- H₂·(|11⟩-|10⟩)/√2 = -|11⟩

This matches the action of the CZ gate on the computational basis states, proving the equivalence.

## Conclusion

Quantum computing represents a distinctive approach to information processing based on quantum mechanical principles. By harnessing superposition and entanglement, quantum computers can solve certain problems more efficiently than classical computers. Universal quantum computation requires only a small set of quantum gates to approximate arbitrary operations. Quantum algorithms demonstrate computational advantages: Grover's search algorithm provides quadratic speedup, while Shor's factoring algorithm achieves exponential speedup for specific problems. Current quantum devices operate with 50-100 qubits and error rates of 0.1-1%, requiring further advances in quantum error correction and physical implementations to achieve practical quantum advantage.
