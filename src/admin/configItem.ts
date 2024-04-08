/** Configuración general sobre Coope */
export interface ConfigItem {
  /** nombre de la aplicación Coope */
  name: string;

  /** da información sobre la aplicación Coope */
  description: string;

  /** número de emergencia para comunicarse con Coope dashboard */
  phoneEmergency: string;

  /** número para obtener información sobre la aplicación Coope */
  phoneInformation: string;

  /** correo electrónico oficial de la aplicación Coope */
  email: string;

  /** URL de facebook oficial de la aplicación Coope */
  facebook: string;

  /** URL de instagram oficial de la aplicación Coope */
  instragram: string;

  /** objeto con los datos de sinpe móvil - ver {@link SinpeData}*/
  sinpeData: SinpeData;

  /** valor real del monto que se cobra por kilómetro */
  kilometerPrice: number;
}

/**
 * Representa la información de sinpe móvil donde el usuario puede realizar el pago
 */
export interface SinpeData {
  /** cédula jurídica, física, dimex o otras de la persona dueña de la cuenta */
  ownerId: string;

  /** nombre de la persona dueña de la cuenta */
  firstName: string;

  /** apellidos de la persona dueña de la cuenta */
  lastName: string;

  /** número de teléfono a al que está asociada la cuenta */
  phoneNumber: string;
}
