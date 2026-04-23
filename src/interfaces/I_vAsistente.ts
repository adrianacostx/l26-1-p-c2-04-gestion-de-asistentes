export interface I_vAsistente {
  get nombre(): string;
  get apellido(): string;
  get cedula(): number;
  get genero(): string;
  get edad(): Date;
  get tipoEntrada(): number;
  get esEstudiante(): boolean;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}