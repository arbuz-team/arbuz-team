# -*- coding: utf-8 -*-
from server.arbuz.views import *


class Start(Dynamic_Event_Manager):

    def Manage_Content_Ground(self):
        return JsonResponse({})

    @staticmethod
    def Launch(request):
        return Start(request).HTML
