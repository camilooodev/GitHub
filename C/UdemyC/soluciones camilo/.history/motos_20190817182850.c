#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
#define HONDA 0.95
#define YAMAHA 0.92
#define SUZUKI 0.90
#define OTROS 0.98
/* Funcion main inicia programa C*/
int main()
{
    char marca[10];
    int descuento, precio, preciofinal;

    printf("Ingrese la marca de la Moto");
    gets(marca);
    printf("Ingrese el precio de la Moto");
    scanf("%i", &precio);

    if (strcmp(marca, "honda") == 0 || strcmp(marca, "Honda") == 0)
    {
        descuento = precio * HONDA;
        preciofinal = precio - descuento;
        printf("\nEl descuento es $ %i", descuento);
        printf("\nEl precio final es $ %i", preciofinal);
    }
    else
    {
        if (strcmp(marca, "yamaha") == 0 || strcmp(marca, "Yamaha") == 0)
        {
            descuento = precio * YAMAHA;
            preciofinal = precio - descuento;
            printf("\nEl descuento es $ %i", descuento);
            printf("\nEl precio final es $ %i", precio final);
        }
        else
        {
            if (strcmp(marca, "suzuki") == 0 || strcmp(marca, "Suzuki") == 0)
            {
                descuento = precio * SUZUKI;
                preciofinal = precio - descuento;
                printf("\nEl descuento es $ %i", descuento);
                printf("\nEl precio final es $ %i", precio final);
            }
            else
                {
                    printf("\nOtras Marcas");
                    descuento = precio * HONDA;
                    preciofinal = precio - descuento;
                    printf("\nEl descuento es $ %i", descuento);
                    printf("\nEl precio final es $ %i", precio final);
                
                
                
                    
                }
            }
        }
    }
    /*Fin de la funciòn C */