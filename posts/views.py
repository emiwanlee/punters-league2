from django.shortcuts import render, get_object_or_404
from.models import Post
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Create your views here.
def posts_list(request):
    posts = Post.objects.all().order_by('-date')
    paginator = Paginator(posts, 10)
    page_number = request.GET.get('page')
    try:
        page_obj = paginator.page(page_number)
    except PageNotAnInteger:
            # If page is not an integer, deliver first page.
         page_obj = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g., 9999), deliver last page of results.
        page_obj = paginator.page(paginator.num_pages)
    return render(request, 'posts/post_lists.html', {'posts': posts})
    


def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'posts/post_detail.html', {'post': post})
