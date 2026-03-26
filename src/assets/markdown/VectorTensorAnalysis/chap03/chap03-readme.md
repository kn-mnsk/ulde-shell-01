# 2-2 Geometry of Space Curve

1. Length of the smooth space curve C: $L = \int_{t_0}^{t_p}(\delta_{jk}\frac{dX^{j}}{dt}\frac{dX^{k}}{dt})^{1/2}dt$  

2. If C is represented by functions whose domain values represent arc length $s$, then $\frac{d\mathbf{r}}{dt}$ is a unit tangent vector filed.  
 $ s = \int_{t_0}^{t_p}(\frac{d\mathbf{r}}{dt}\cdot\frac{d\mathbf{r}}{dt})^{1/2}dt.$  
 Therefore,  
 $\frac{ds}{dt} = (\frac{d\mathbf{r}}{dt}\cdot\frac{d\mathbf{r}}{dt})^{1/2}.$  
 In other words, $ds/dt$ is the magnitude of the tangent vector filed $d\mathbf{r}/dt$.  If $t=s$, the magnitude is 1.  

3. Let's use the symbol $\mathbf{t}$ in place of the unit tangent field $\frac{d\mathbf{r}}{ds}$.  
If $\frac{d\mathbf{t}}{ds}\not =0$,  
$\mathbf{n}=\frac{1}{k}\frac{d\mathbf{t}}{ds}$, where $\kappa=(\frac{d\mathbf{t}}{ds}\cdot\frac{d\mathbf{t}}{ds})^{1/2}$  
is a unit vector field orthogonal to $\mathbf{t}$ for all $s$.

4. The vector field $\mathbf{n}$ defined on a curve C is called the principal normal field on C.  

5. At each point of C the principal normal $\mathbf{n}$ lies in the osculating plane.  
Accordingly, the osculating plane, or intuitively speaking, the plane that comes closest to containing the part of the curve in a neighborhood of $P_{0}$, is the plane of the tangent vector $\mathbf{t}$ and the principal normal $\mathbf{n}$  
The magnitude $\kappa$ of the principal normal is significant in itself.  
Roghly speaking, $d\mathbf{t}/ds$ is the change in the tangent vector $\mathbf{t}$ caused by a change in the arc length value $s$.  
Since $\mathbf{t}$ is a unit vector, this change deals the direction of $\mathbf{t}$.  

6. $\kappa=\vert\frac{d\mathbf{t}}{ds}\vert$ is the curvature of C at the point P with coordinates $X^{j}(s)$.  

7. The vector field $\mathbf{b = t \times n}$ is called the binormal vector field along C.  

8. $\mathbf{t, n, b}$, in this order, form a right-handed orthogonal unit triad at each point of a curve C.  

9. $\tau\(s\)=-\mathbf{n}\cdot\(d\mathbf{b}/ds\)$ is called the torsion field with respect to a curve C.</br>
The magnitude of the vector field $d\mathbf{b}/ds$ also has a geometric significance; $\mathbf{b}$ is a unit field, so that the change, $d\mathbf{b}/ds$, of $\mathbf{b}$ with respect to change in the value of $s$ has to do with direction. In this case the deviation in direction can be tied in with the variation of the curve from the plane of $\mathbf{t}$ and $\mathbf{n}$. In particular, we measure the projection of $d\mathbf{b}/ds$ onto the principal normal.

10. Frenet-Serret Formula  
(a) $\frac{d\mathbf{t}}{ds}=\kappa\mathbf{n}$
(b) $\frac{d\mathbf{n}}{ds}=-\kappa\mathbf{t}+\tau\mathbf{b}$
(c) $\frac{d\mathbf{b}}{ds}=-\tau\mathbf{n}$

</br>
</br>
<!-- 
**Those are the excerpts from the book of The Introduction to Vector and Tensor Analysis: Robert C. Wrede (0-486-61879-X)**  
[DOVER BOOKS ON MATHMATICS](https://store.doverpublications.com/)   -->
