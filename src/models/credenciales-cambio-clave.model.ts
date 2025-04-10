import {Model, model, property} from '@loopback/repository';

@model()
export class CredencialesCambioClave extends Model {
  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  claveNueva: string;

  @property({
    type: 'string',
    required: true,
  })
  validarClaveNueva: string;

  @property({
    type: 'string',
    required: true,
  })
  idUsuario: string;


  constructor(data?: Partial<CredencialesCambioClave>) {
    super(data);
  }
}

export interface CredencialesCambioClaveRelations {
  // describe navigational properties here
}

export type CredencialesCambioClaveWithRelations = CredencialesCambioClave & CredencialesCambioClaveRelations;
