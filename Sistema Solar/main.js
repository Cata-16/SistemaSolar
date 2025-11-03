
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Sol
const geometrySol = new THREE.SphereGeometry(1, 64, 64);
const materialSol = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const Sol = new THREE.Mesh(geometrySol, materialSol);
scene.add(Sol);

// Mercurio
const geometryMercurio = new THREE.SphereGeometry(0.2, 64, 64);
const materialMercurio = new THREE.MeshBasicMaterial({ color: 0xb5651d });
const Mercurio = new THREE.Mesh(geometryMercurio, materialMercurio);
scene.add(Mercurio);

// Venus
const geometryVenus = new THREE.SphereGeometry(0.4, 64, 64);
const materialVenus = new THREE.MeshBasicMaterial({ color: 0xe3c16f });
const Venus = new THREE.Mesh(geometryVenus, materialVenus);
scene.add(Venus);

// Tierra
const geometryTierra = new THREE.SphereGeometry(0.5, 64, 64);
const materialTierra = new THREE.MeshBasicMaterial({ color: 0x00aaff });
const Tierra = new THREE.Mesh(geometryTierra, materialTierra);
scene.add(Tierra);

// Marte
const geometryMarte = new THREE.SphereGeometry(0.4, 64, 64);
const materialMarte = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const Marte = new THREE.Mesh(geometryMarte, materialMarte);
scene.add(Marte);

// Júpiter
const geometryJupiter = new THREE.SphereGeometry(0.9, 64, 64);
const materialJupiter = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const Jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
scene.add(Jupiter);

// Saturno
const geometrySaturno = new THREE.SphereGeometry(0.8, 64, 64);
const materialSaturno = new THREE.MeshBasicMaterial({ color: 0xd2b48c });
const Saturno = new THREE.Mesh(geometrySaturno, materialSaturno);
scene.add(Saturno);

    // Anillos Saturno
    const ringGeometry = new THREE.RingGeometry(1.0, 1.5, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xd2b48c, side: THREE.DoubleSide });
    const SaturnoRing = new THREE.Mesh(ringGeometry, ringMaterial);
    SaturnoRing.rotation.x = Math.PI / 2;
    scene.add(SaturnoRing);

// Urano
const geometryUrano = new THREE.SphereGeometry(0.7, 64, 64);
const materialUrano = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const Urano = new THREE.Mesh(geometryUrano, materialUrano);
scene.add(Urano);

// Neptuno
const geometryNeptuno = new THREE.SphereGeometry(0.6, 64, 64);
const materialNeptuno = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const Neptuno = new THREE.Mesh(geometryNeptuno, materialNeptuno);
scene.add(Neptuno);

// Plutón
const geometryPluton = new THREE.SphereGeometry(0.2, 64, 64);
const materialPluton = new THREE.MeshBasicMaterial({ color: 0xffffff });
const Pluton = new THREE.Mesh(geometryPluton, materialPluton);
scene.add(Pluton);


//---LUNAS---

const geometryMercurioLuna = new THREE.SphereGeometry(0.05, 64, 64);
const materialMercurioLuna = new THREE.MeshBasicMaterial({ color: 0x888888 });
const MercurioLuna = new THREE.Mesh(geometryMercurioLuna, materialMercurioLuna);
scene.add(MercurioLuna);

const geometryVenusLuna = new THREE.SphereGeometry(0.07, 64, 64);
const materialVenusLuna = new THREE.MeshBasicMaterial({ color: 0xbbbbbb });
const VenusLuna = new THREE.Mesh(geometryVenusLuna, materialVenusLuna);
scene.add(VenusLuna);

const geometryTierraLuna = new THREE.SphereGeometry(0.1, 64, 64);
const materialTierraLuna = new THREE.MeshBasicMaterial({ color: 0xffffff });
const TierraLuna = new THREE.Mesh(geometryTierraLuna, materialTierraLuna);
scene.add(TierraLuna);

const geometryMarteLuna = new THREE.SphereGeometry(0.08, 64, 64);
const materialMarteLuna = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const MarteLuna = new THREE.Mesh(geometryMarteLuna, materialMarteLuna);
scene.add(MarteLuna);

const geometryJupiterLuna = new THREE.SphereGeometry(0.15, 64, 64);
const materialJupiterLuna = new THREE.MeshBasicMaterial({ color: 0x999999 });
const JupiterLuna = new THREE.Mesh(geometryJupiterLuna, materialJupiterLuna);
scene.add(JupiterLuna);

const geometrySaturnoLuna = new THREE.SphereGeometry(0.12, 64, 64);
const materialSaturnoLuna = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const SaturnoLuna = new THREE.Mesh(geometrySaturnoLuna, materialSaturnoLuna);
scene.add(SaturnoLuna);

const geometryUranoLuna = new THREE.SphereGeometry(0.1, 64, 64);
const materialUranoLuna = new THREE.MeshBasicMaterial({ color: 0x66ffff });
const UranoLuna = new THREE.Mesh(geometryUranoLuna, materialUranoLuna);
scene.add(UranoLuna);

const geometryNeptunoLuna = new THREE.SphereGeometry(0.09, 64, 64);
const materialNeptunoLuna = new THREE.MeshBasicMaterial({ color: 0x3333ff });
const NeptunoLuna = new THREE.Mesh(geometryNeptunoLuna, materialNeptunoLuna);
scene.add(NeptunoLuna);

const geometryPlutonLuna = new THREE.SphereGeometry(0.05, 64, 64);
const materialPlutonLuna = new THREE.MeshBasicMaterial({ color: 0xffffff });
const PlutonLuna = new THREE.Mesh(geometryPlutonLuna, materialPlutonLuna);
scene.add(PlutonLuna);


//Etiquetas
const etiquetas = {
  Sol: crearEtiqueta("Sol"),
  Mercurio: crearEtiqueta("Mercurio"),
  Venus: crearEtiqueta("Venus"),
  Tierra: crearEtiqueta("Tierra"),
  Marte: crearEtiqueta("Marte"),
  Jupiter: crearEtiqueta("Júpiter"),
  Saturno: crearEtiqueta("Saturno"),
  Urano: crearEtiqueta("Urano"),
  Neptuno: crearEtiqueta("Neptuno"),
  Pluton: crearEtiqueta("Plutón"),
};

function crearEtiqueta(nombre) {
  const div = document.createElement("div");
  div.className = "label";
  div.textContent = nombre;
  document.body.appendChild(div);
  return div;
}

let tiempo = 0;
camera.position.z = 15;

//Animación
function animate() {
  tiempo += 0.02; // más lento y estable

  // Rotación Sol
  Sol.rotation.y += 0.01;

  // Mercurio
  Mercurio.position.x = Sol.position.x + Math.cos(tiempo * 0.3) * 3;
  Mercurio.position.z = Sol.position.y + Math.sin(tiempo * 0.3) * 3;
  Mercurio.rotation.y += 0.02;
  MercurioLuna.position.x = Mercurio.position.x + Math.cos(tiempo * 2.0) * 0.5;
  MercurioLuna.position.z = Mercurio.position.z + Math.sin(tiempo * 2.0) * 0.5;

  // Venus
  Venus.position.x = Sol.position.x + Math.cos(tiempo * 0.25) * 4;
  Venus.position.z = Sol.position.y + Math.sin(tiempo * 0.25) * 4;
  Venus.rotation.y += 0.02;
  VenusLuna.position.x = Venus.position.x + Math.cos(tiempo * 1.8) * 0.6;
  VenusLuna.position.z = Venus.position.z + Math.sin(tiempo * 1.8) * 0.6;

  // Tierra
  Tierra.position.x = Sol.position.x + Math.cos(tiempo * 0.2) * 5;
  Tierra.position.z = Sol.position.y + Math.sin(tiempo * 0.2) * 5;
  Tierra.rotation.y += 0.02;
  TierraLuna.position.x = Tierra.position.x + Math.cos(tiempo * 1.5) * 0.7;
  TierraLuna.position.z = Tierra.position.z + Math.sin(tiempo * 1.5) * 0.7;

  // Marte
  Marte.position.x = Sol.position.x + Math.cos(tiempo * 0.18) * 6;
  Marte.position.z = Sol.position.y + Math.sin(tiempo * 0.18) * 6;
  Marte.rotation.y += 0.02;
  MarteLuna.position.x = Marte.position.x + Math.cos(tiempo * 1.7) * 0.6;
  MarteLuna.position.z = Marte.position.z + Math.sin(tiempo * 1.7) * 0.6;

  // Júpiter
  Jupiter.position.x = Sol.position.x + Math.cos(tiempo * 0.16) * 8;
  Jupiter.position.z = Sol.position.y + Math.sin(tiempo * 0.16) * 8;
  Jupiter.rotation.y += 0.02;
  JupiterLuna.position.x = Jupiter.position.x + Math.cos(tiempo * 1.4) * 0.9;
  JupiterLuna.position.z = Jupiter.position.z + Math.sin(tiempo * 1.4) * 0.9;

  // Saturno
  Saturno.position.x = Sol.position.x + Math.cos(tiempo * 0.14) * 10;
  Saturno.position.z = Sol.position.y + Math.sin(tiempo * 0.14) * 10;
  Saturno.rotation.y += 0.02;
  SaturnoRing.position.set(Saturno.position.x, Saturno.position.y, Saturno.position.z);
  SaturnoLuna.position.x = Saturno.position.x + Math.cos(tiempo * 1.3) * 1.0;
  SaturnoLuna.position.z = Saturno.position.z + Math.sin(tiempo * 1.3) * 1.0;

  // Urano
  Urano.position.x = Sol.position.x + Math.cos(tiempo * 0.12) * 12;
  Urano.position.z = Sol.position.y + Math.sin(tiempo * 0.12) * 12;
  Urano.rotation.y += 0.02;
  UranoLuna.position.x = Urano.position.x + Math.cos(tiempo * 1.2) * 0.8;
  UranoLuna.position.z = Urano.position.z + Math.sin(tiempo * 1.2) * 0.8;

  // Neptuno
  Neptuno.position.x = Sol.position.x + Math.cos(tiempo * 0.1) * 14;
  Neptuno.position.z = Sol.position.y + Math.sin(tiempo * 0.1) * 14;
  Neptuno.rotation.y += 0.02;
  NeptunoLuna.position.x = Neptuno.position.x + Math.cos(tiempo * 1.1) * 0.9;
  NeptunoLuna.position.z = Neptuno.position.z + Math.sin(tiempo * 1.1) * 0.9;

  // Plutón
  Pluton.position.x = Sol.position.x + Math.cos(tiempo * 0.08) * 16;
  Pluton.position.z = Sol.position.y + Math.sin(tiempo * 0.08) * 16;
  Pluton.rotation.y += 0.02;
  PlutonLuna.position.x = Pluton.position.x + Math.cos(tiempo * 1.0) * 0.5;
  PlutonLuna.position.z = Pluton.position.z + Math.sin(tiempo * 1.0) * 0.5;

  //Etiquetas
  actualizarEtiqueta(Sol, etiquetas.Sol);
  actualizarEtiqueta(Mercurio, etiquetas.Mercurio);
  actualizarEtiqueta(Venus, etiquetas.Venus);
  actualizarEtiqueta(Tierra, etiquetas.Tierra);
  actualizarEtiqueta(Marte, etiquetas.Marte);
  actualizarEtiqueta(Jupiter, etiquetas.Jupiter);
  actualizarEtiqueta(Saturno, etiquetas.Saturno);
  actualizarEtiqueta(Urano, etiquetas.Urano);
  actualizarEtiqueta(Neptuno, etiquetas.Neptuno);
  actualizarEtiqueta(Pluton, etiquetas.Pluton);

  renderer.render(scene, camera);
}

function actualizarEtiqueta(objeto, etiqueta) {
  const vector = objeto.position.clone().project(camera);
  const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
  etiqueta.style.left = `${x}px`;
  etiqueta.style.top = `${y}px`;
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});