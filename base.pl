% Hechos
contrato(juan, contrato1).
contrato(maria, contrato2).
incumplimiento(contrato1).

% Regla: Se aplica penalización si la persona tiene un contrato y ese contrato tiene un incumplimiento
penalizacion_aplicable(Persona) :- 
    contrato(Persona, ID), 
    incumplimiento(ID).