# Para usar multiplos banco de dados necessário configuração

---

Na view.py é necessário especificar o banco de dados a ser utilizado.
```
class VendedoresListView(ListView):
    model = VendedoresModel
    template_name = 'relatorios/pages/vendedores-list.html'
    context_object_name = 'vendedores'

    def get_queryset(self):
        return VendedoresModel.objects.using('postgresql').all()
```

---

O Django nos fornece uma classe de routeamento de banco de dados automatizados.
O roteamento ele recebe uma indicação de instância, do objeto relacionado a operação sendo gravação ou leitura.
Ela possui quatro métodos.

> db_for_read(model, **hints)
> Indica ao banco de dados a leitura de objetos do tipo model
> Retorna none se não tiver indicação

> db_for_write(modelo, **hints)
> Indica ao banco de dados a escrita de objetos do tipo model
> Retorna none se não tiver indicação

> allow_relation(obj1, obj2, **hints)
> Retorna True se permitida a relação entre obj1 e obj2, False se não permitir e None se não for indicado

> allow_migrate(db, app_label, model_name = None, **hints)
> Determina se é possível fazer migrate ou não (True or False), None se não tiver indicação
> app_label é o rótulo do app utilizado na ação
> model_name é nome do model
> 
